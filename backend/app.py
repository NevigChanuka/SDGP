from flask import Flask

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


app = Flask(__name__)

@app.route('/')
def hello_world():  # put application's code here
    return 'Hello World!'

@app.route('/synonym-words', methods=['POST'])
def synonyms_finder():
    try:

        file_name = 'synonym_data.parquet'

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

if __name__ == '__main__':
    app.run()
