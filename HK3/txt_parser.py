import codecs
import json

def txt_parser():
    with codecs.open('./articleData.txt', 'r') as f1:
        with codecs.open('./dataInsertion.js', 'a') as f2:
            f2.write('connection = new Mongo()\n')
            f2.write('db = connection.getDB(\'mydb\')\n')
            
            lines = f1.readlines()
            for line in lines:
                lbrackets = [pos for pos, char in enumerate(line) if char == '[']
                rbrackets = [pos for pos, char in enumerate(line) if char == ']']

                post_on_date = {}
                left = line.find(', (')
                right = line[left:].find(')') + left
                post_on_date_list = [word.strip() for word in line[left + 3: right].split(',')]
                post_on_date['day'] = int(post_on_date_list[0])
                post_on_date['month'] = int(post_on_date_list[1])
                post_on_date['year'] = int(post_on_date_list[2])
                post_on_date['time'] = post_on_date_list[3]

                similars = line[lbrackets[0]: rbrackets[0] + 1]
                commentRaw = line[lbrackets[1] : rbrackets[1]]
                commentRaw = commentRaw.replace('[', '')
                commentRaw = commentRaw.replace(']', '')
                commentRaw = commentRaw.replace('(', '')
                commentRaw = commentRaw.replace(')', '')
                comments_list = [word.strip() for word in commentRaw.split(',')]
                comments = []
                numberOfcomments = len(comments_list)//9
                for j in range(numberOfcomments):
                   comment = {}
                   comment['comment_id'] = int(comments_list[j*9 + 0])
                   comment['article_id'] = int(comments_list[j*9 + 1])
                   comment['user_id'] = comments_list[j*9 + 2]
                   comment['post_on_date'] = {}
                   comment['post_on_date']['day'] = int(comments_list[j*9 + 3])
                   comment['post_on_date']['month'] = int(comments_list[j*9 + 4])
                   comment['post_on_date']['year'] = int(comments_list[j*9 + 5])
                   comment['post_on_date']['time'] = comments_list[j*9 + 6]
                   comment['comment_text'] = comments_list[j*9 + 7]
                   comment['score'] = float(comments_list[j*9 + 8])
                   comments.append(comment)
            
                lbrackets = [pos for pos, char in enumerate(line) if char == '[']
                rbrackets = [pos for pos, char in enumerate(line) if char == ']']
                restString = line[0: left]
                restString += line[right : lbrackets[0] - 2]
                restString = restString.replace(')','')
                restString = restString.replace('(','')
                words = [word.strip() for word in restString.split(',')]
                readStartIndex = rbrackets[0] + 3
                readEndIndex = line[readStartIndex:].find(',') + readStartIndex

                record = {}
                record['article_type'] = words[0]
                record['article_section'] = words[1]
                record['article_id'] = int(words[2])
                record['post_on_date'] = post_on_date
                record['reportor_name'] = words[3]
                record['similar_stories'] =  similars
                record['num_times_read'] = int(line[readStartIndex:readEndIndex])
                record['article_text'] = line[readEndIndex + 2 : lbrackets[1] - 2]
                record['comments'] = comments
                
                recordRaw = json.dumps(record)
                recordRaw = recordRaw.replace('"[', '[')
                recordRaw = recordRaw.replace(']"', ']')
                recordRaw = recordRaw.replace('"\'', '\'')
                recordRaw = recordRaw.replace('\'"', '\'')
                record = 'db.article.insert(' + recordRaw + ')\n'
                
                f2.write(record)
                

if __name__ == '__main__':
    txt_parser()

            

