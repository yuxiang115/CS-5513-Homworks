db.article.insert({
	"article_type": "news article", 
	"article_section": "Sports", 
	"article_id": 75, 
	"post_on_date": {
						"day": 31,
						"month": 12, 
						"year": 2017,
						"time": '23:59:59'
					}, 
	"reportor_name": "Bridgette Nolan", 
	"similar_stories": ["thedaily.com/sports/oklahomafootball-sooners-land-kentucky-graduate-transfer.html", 
						"thedaily.com/sports/oklahoma-football-sooners-look-tofill-void.html"],
						
	"num_times_read": 11357, 
	"article_text": "Despite the Cowboys last loss last season, they have several options to replace their linebacker…", 
	
	"comments": [
					{
						"comment_id": 12, 
						"article_id": 75, 
						"user_id": "dtillman@gmail.com", 
						"post_on_date": {
											"day": 31,
											"month": 12, 
											"year": 2017, 
											"time": "09:29:31"
										}, 
						"comment_text": "Keep up the work with your fake news!", 
						"score": -99
					}
				]
});
db.article.find({"article_id": 75});
