import pandas as pd
import numpy as np
import re

word_tokens = []
features_list = []

def check_grammar(sentence):

    # sentence = 'මම ලිපිය බලන්නෙමි නට'


    verb_last1 = ["යි",
                  "ති",
                  "මු",
                  "මි",
                  "හු",
                  "හි",

                  "වයි",
                  "වති",
                  "වමු",
                  "වමි",
                  "වහු",
                  'වහි',

                  'න්නෙමි',
                  'න්නෙමු',
                  'න්නෙහු',
                  'න්නෙහි',

                  'න්නේ ය',
                  'න්නී ය',
                  'න්නෝ ය',

                  'ව',
                  'නු',
                  'නුව',

                  'වමින්',
                  'මින්',
                  'න',
                  'නවා',
                  'න්න',
                  'න්නට',
                  'න්නාට',
                  'ද්දී',

                  'න්නේ',
                  'න්නා',
                  'න්නෝ',
                  'න්නන්',
                  'න්නනට',
                  'න්නී',

                  ]

    # convert letters to unicode
    def letters_to_unicode(letters):
        return ' '.join(f"U+{ord(char):04X}" for char in letters)

    # convert unicode to letters
    def unicode_to_letters(unicode_string):
        try:
            # Split the input by spaces and convert each to a character
            letters = ''.join(chr(int(code[2:], 16)) for code in unicode_string)
            return letters
        except ValueError:
            return "Invalid Unicode input!"

    # remove all non-sinhala characters
    def word_prepro(sentence):

        # filter the only sinhala words
        sinhala_pattern = r'[\u200d\u0D80-\u0DFF]+'
        sentences = re.findall(sinhala_pattern, sentence)
        cleared_sentences = [re.sub(r"\u200d", "", word) for word in sentences]

        return cleared_sentences

    cleared_sentence = word_prepro(sentence)
    print(cleared_sentence)


    # read vocab_data file
    vocab_data_df = pd.read_parquet('vocab_data.parquet', engine='pyarrow')

    # token list creator
    def words_to_tokens(word):

        word_token = -1

        result = vocab_data_df[vocab_data_df['words'] == word]
        # result = vocab_data_df[vocab_data_df['words'].str.contains(words, na=False, case=False)]

        # if word not found
        if result.empty:
            uni_list = letters_to_unicode(word).split()

            #print(word, uni_list)


            while uni_list:
                uni_list.pop()
                new_word = unicode_to_letters(uni_list)
                result = vocab_data_df[vocab_data_df['words'] == new_word]
                #print(new_word)
                if not result.empty:
                    word_token=  (result.index.tolist()[0])
                    #print(result.index.tolist()[0])
                    break
        else:
            word_token = result.index.tolist()[0]

        return word_token


    def feature_row_finder(filename, tokens):
        df = pd.read_parquet(filename, engine='pyarrow')
        positions = np.argwhere(df.values == tokens)
        #print("relation table(x,y): ", positions)

        # get the column name of the word in vocab relation table
        column_name = df.columns[positions[0][1]]
        number = [item for item in column_name if item.isdigit()]
        row_number = int(''.join(number))

        return row_number


    def tokens_to_features(tokens):

        new_list = [0] * 19

        if tokens != -1:

            filename = 'relation_table.parquet'
            feature_row = feature_row_finder(filename, tokens)

            vocab_feature_df = pd.read_parquet('vocab_feature.parquet', engine='pyarrow')
            features = vocab_feature_df.iloc[feature_row].astype(int)

            new_list  = features.tolist()


        else:
            #print("Word token not found")
            pass

        return new_list








    def final_output(correct_word, index):

        cleared_sentence[index] = correct_word
        cleaned_sent = ' '.join(cleared_sentence)
        print(cleaned_sent)

        # for index, value in enumerate(word_tokens):
        #     if value == verb_token:
        #         if cleared_sentence[index] == correct_word:
        #             print("Correct!")
        #             print(correct_word)
        #
        #         else:
        #             print("Incorrect!")
        #             print(correct_word)


    def get_feature_row(index):
        filename = 'verb_present_relation_table.parquet'
        feature_row = feature_row_finder(filename, word_tokens[index + 1])
        vocab_feature_df = pd.read_parquet('verb_present_feature.parquet', engine='pyarrow')
        features = vocab_feature_df.iloc[feature_row].astype(int)
        feature_list = features.tolist()

        return feature_list



    def verb_type_finder(verb_root, index, value):
                if value == 1:
                    feature_row = get_feature_row(index)
                    if feature_row[3] == 1:
                        correct_verb = f'{verb_root}{verb_last1[3]}'
                        final_output(correct_verb, index + 1)
                        # print(correct_verb)

                elif value == 2:
                    feature_row = get_feature_row(index)
                    if feature_row[2] == 1:
                        verb_root = vocab_data_df.iloc[word_tokens[index + 1]]
                        correct_verb = f'{verb_root}{verb_last1[2]}'
                        final_output(correct_verb, word_tokens[index + 1])
                        # print(correct_verb)


    def stop_word_finder(index, value):
        stop_words = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

        vocab_feature_df = pd.read_parquet('vocab_data.parquet', engine='pyarrow')
        features = vocab_feature_df.iloc[word_tokens[index + 1]]
        verb_root = features.tolist()[0]

        for index, row in enumerate(features_list[index:]):
            # print(index, row)

            if row[14] == 1 or row[18] == 1:

                print(index + 1)
                print(cleared_sentence[index + 1])

                for swp in stop_words:

                    if cleared_sentence[index + 1] == f'{verb_root}{verb_last1[swp]}':
                        verb_type_finder(verb_root, index, value)
                        break
                break




    def subject_finder():
        for index, row in enumerate(features_list):

            # උක්ත
            if row[2] == 1:

                # ඒක වචන, උත්තම පුරුෂ
                if row[0] == 1 and row[5] == 1:
                    stop_word_finder(index + 1, 1)

                # බහු වචන, උත්තම පුරුෂ
                elif row[1] == 1 and row[5] == 1:
                    stop_word_finder(index + 1, 1)

                # # ඒක වචන, ප්‍රථම පුරුෂ,
                # elif row[0] == 1 and row[4] == 1:
                #     verb_finder(3, index + 1)
                #
                #     # පුරුෂ ලිංග
                #     if row[7] == 1:
                #         verb_finder(4, index + 1)
                #
                #     #  ස්ත්‍රී ලිංග
                #     elif row[8] == 1:
                #         verb_finder(4, index + 1)
                #
                #     # නපුංසක ලිංග
                #     elif row[9] == 1:
                #         verb_finder(6, index + 1)







            # අනුක්තය
            elif row[3] == 1:
                # print(row)
                pass











    # find each word tokens
    for word in cleared_sentence:
        word_tokens.append(words_to_tokens(word))
    print(word_tokens)

    for tokens in word_tokens:
        features_list.append(tokens_to_features(tokens))
    print(features_list)

    subject_finder()

    return