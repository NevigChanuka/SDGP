from flask import Flask, render_template, request, jsonify
import pandas as pd
import re
from flask_cors import CORS


def load_data(filename):
    df = pd.read_parquet(filename, engine='pyarrow')  # Load Parquet file
    data = df.head(20).to_dict(orient='records')  # Convert first 20 rows to JSON

    dict_list = []
    # Access all dictionaries in the list
    for dict in data:

        # Remove all key-value pairs where the value is 'nan'
        cleaned_dict = {key: value for key, value in dict.items() if value != "nan"}
        dict_list.append(cleaned_dict)

    return dict_list


def word_finder(text,file_name):

    # read file
    df = pd.read_parquet(file_name)

    # Filter rows where any column contains the search word
    filtered_df = df[df.apply(lambda row: row.astype(str).str.lower().str.contains(text, na=False).any(),axis=1)]

    # Get the values
    word_list = filtered_df.values[0]

    # Remove unwanted words
    cleared_word_list = word_list[(word_list != 'nan') & (word_list != text)]

    return cleared_word_list


def word_prepro(word):

    sinhala_pattern = r'[\u200d\u0D80-\u0DFF]+'
    sentences = re.findall(sinhala_pattern, word)
    cleared_sentences = [re.sub(r"\u200d", "", word) for word in sentences]

    return cleared_sentences

app = Flask(__name__)
CORS(app)
@app.route('/')
def index():
    return render_template('index.html')



@app.route('/api/synonym-words', methods=['POST'])
def synonyms_finder():
    try:

        file_name = 'synonym_data.parquet'

        # Get word from frontend
        data = request.get_json()
        print(data)
        word = data.get("word", "").strip()

        # word preprocess
        cleared_word = word_prepro(word)[0]

        # find the word
        res = word_finder(cleared_word, file_name)

        # Return to frontend
        return jsonify({"response": res.tolist()})

    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/antonyms-words', methods=['POST'])
def antonyms_finder():
    try:
        file_name = 'antonyms_data.parquet'

        # Get word from frontend
        data = request.get_json()
        word = data.get("word", "").strip()

        # word preprocess
        cleared_word = word_prepro(word)[0]

        # find the word
        res = word_finder(cleared_word, file_name)

        # Return to frontend
        return jsonify({"response": res.tolist()})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/paired-words', methods=['POST'])
def paired_words_finder():
    try:
        file_name = 'couplets_data.parquet'

        # Get word from frontend
        data = request.get_json()
        word = data.get("word", "").strip()

        # word preprocess
        cleared_word = word_prepro(word)[0]

        # find the word
        res = word_finder(cleared_word, file_name)

        # Return to frontend
        return jsonify({"response": res.tolist()})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/get-parquet-data', methods=['GET'])
def get_parquet_data():
    try:
        filename_list = ['synonym_data.parquet', 'antonyms_data.parquet', 'couplets_data.parquet']

        word_data = []
        for filename in filename_list:
            data = load_data(filename)
            word_data.append(data)

        return jsonify(word_data)

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/grammar-rules/<filename>')
def serve_image(filename):
    return send_from_directory('grammar_rules', filename)

# @app.route('/api/sys', methods=['POST'])
# def synonyms_finder():
#     try:
#
#         file_name = 'synonym_data.parquet'
#
#         # Get word from frontend
#         data = request.get_json()
#         print(data)
#         word = data.get("word", "").strip()
#
#         # word preprocess
#         cleared_word = word_prepro(word)[0]
#
#         # find the word
#         res = word_finder(cleared_word, file_name)
#
#         # Return to frontend
#         return jsonify({"response": res.tolist()})
#
#     except Exception as e:
#         return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run()
