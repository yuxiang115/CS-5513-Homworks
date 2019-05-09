db.article.update({"article_id": 76},{$push: {"comments": {
															"comment_id": 2840,
															"article_id":75, 
															"user_id": "haha@qq.com", 
															"post_on_date":{	
																			"day":22,
																			"month": 11,
																			"year": 2018,
																			"time": "09:29:31"
																		 },
															"comment_text": "nothings special",
															"score": 10
															}
												}
									});
							
db.article.find({"article_id": 76});

								