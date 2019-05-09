db.article.update({"post_on_date.year" : {$gt: 2016},"article_text" : {$regex : ".*house.*"}},{$addToSet : {"similar_stories" : {$each: ["How to build a house"]}}});
				
db.article.find({"post_on_date.year" : 	{$gt: 2016} ,"article_text" : {$regex : ".*house.*"}});