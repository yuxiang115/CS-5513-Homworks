import random
import names
from requests.exceptions import HTTPError
import codecs

article_type = ['Original research', 'Review article', 'Clinical case study', 'Clinical case study', 'Clinical trial', 'Perspective opinion and commentary', 'Book review']
article_section = ['Sports', 'Political', 'Economic', 'Entertainment', 'World', 'Technology', 'Faith & Values','Autos', 'Travel + Outdoors', 'Food + Drink','House + Home', 'Fitness + Well-being']
def new_article_data(number):

    data_list = [] 
    j = 1
    for i in range(number):
        data = {}
        while True:
            try:

                j = j + 1
                break
            except HTTPError:
                j = j + 1
        data['article_type'] = random.choice(article_type)
        data['article_section'] = random.choice(article_section)
        data['article_id'] = i
        data['post_time'] = (random.randrange(1, 31), random.randrange(1, 13), random.randrange(2000, 2019), (str(random.randrange(0, 24)) + ':' + str(random.randrange(0, 60)) + ':' + str(random.randrange(0,60)))) 
        data['reporter_name'] =  names.get_full_name() 
        data['similar article'] = []
        data['similar article'].append('similar2')
        data['similar article'].append('similar')
		
        data['number_times_read'] = random.randrange(0,1000000)
        lines = open('file.txt').read().splitlines()
        data['article_text'] = random.choice(lines)
		

		#comments
        temp_list = []
        for k in range(2):
            temp = ()
            commentID = 100 + j + k
            articleID = data['article_id']
            userID = 1000 + j
            postedDate = (random.randrange(1, 30), random.randrange(1, 13), random.randrange(2000, 2019),)
            time = (str(random.randrange(0, 24)) + ':' + str(random.randrange(0, 60)) + ':' + str(random.randrange(0,60)),)
            commentText = 'comment:Text'
            score = random.randrange(2, 100)/10
            temp += (commentID, articleID, userID) + (postedDate + time, ) + (commentText,) + (score,)
            temp_list.append(temp)
        data['comments'] = temp_list

        data_list.append(data)
        




    # write to file: articleData.txt
    with codecs.open('./articleData.txt', 'a') as f:
        for data in data_list:
            keys = list(data.keys())
            for i in range(len(keys)):
                value = data[keys[i]]
                f.write(str(value))
                if i != len(keys) - 1:
                    f.write(', ')
                else:
                    pass
            f.write('\n')

    # a) print the first 5 entries
    with codecs.open('articleData.txt', 'r') as f:
        for i in range(5):
            print(f.readline())

if __name__ == "__main__":
    # create 50 article datas
    new_article_data(50)