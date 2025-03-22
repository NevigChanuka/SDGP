from flask import Flask

app = Flask(__name__)


@app.route('/')
def hello_world():  # put application's code here
    return 'Hello World!'

@app.route('/synonym-words', methods=['POST'])
def synonyms_finder():
    try:
        # Get word from frontend
        data = request.get_json()
        word = data.get("word", "").strip()

        # word preprocess
        cleared_word = word_prepro(word)

        #read file
        synonym_data_df = pd.read_parquet('synonym_data.parquet')

        # Filter rows where any column contains the search word
        filtered_df = synonym_data_df[synonym_data_df.apply(lambda row: row.astype(str).str.lower().str.contains(cleared_word[0], na=False).any(), axis=1)]

        # Get the values
        synonym_word_list = filtered_df.values[0]

        # Remove unwanted words
        cleared_synonym_word_list = synonym_word_list[(synonym_word_list != 'nan') & (synonym_word_list != cleared_word[0])]

        # Return to frontend
        return jsonify({"synonyms": cleared_synonym_word_list.tolist()})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run()
