connection = new Mongo()
db = connection.getDB('mydb')
db.article.insert({"article_type": "Clinical case study", "article_section": "Entertainment", "article_id": 0, "post_on_date": {"day": 15, "month": 4, "year": 2011, "time": '4:17:15'}, "reportor_name": "Robert Cox", "similar_stories": ['similar2', 'similar'], "num_times_read": 641088, "article_text": "father-in-law, his motherin-law, a lieutenant, and seven bodyguard", "comments": [{"comment_id": 103, "article_id": 0, "user_id": "1003", "post_on_date": {"day": 26, "month": 5, "year": 2014, "time": '2:34:0'}, "comment_text": 'comment:Text', "score": 6.1}, {"comment_id": 104, "article_id": 0, "user_id": "1003", "post_on_date": {"day": 8, "month": 10, "year": 2006, "time": '2:53:32'}, "comment_text": 'comment:Text', "score": 6.6}]})
db.article.insert({"article_type": "Clinical case study", "article_section": "Travel + Outdoors", "article_id": 1, "post_on_date": {"day": 28, "month": 5, "year": 2004, "time": '16:46:26'}, "reportor_name": "Crystal Dole", "similar_stories": ['similar2', 'similar'], "num_times_read": 22995, "article_text": "told me recently that Mehsud was resting on his back. Malik, using his hands to make a picture frame, explained that ", "comments": [{"comment_id": 104, "article_id": 1, "user_id": "1004", "post_on_date": {"day": 18, "month": 11, "year": 2006, "time": '12:49:44'}, "comment_text": 'comment:Text', "score": 2.0}, {"comment_id": 105, "article_id": 1, "user_id": "1004", "post_on_date": {"day": 19, "month": 5, "year": 2014, "time": '6:35:11'}, "comment_text": 'comment:Text', "score": 9.7}]})
db.article.insert({"article_type": "Perspective opinion and commentary", "article_section": "Entertainment", "article_id": 2, "post_on_date": {"day": 13, "month": 3, "year": 2008, "time": '10:11:6'}, "reportor_name": "Katherine Ruiz", "similar_stories": ['similar2', 'similar'], "num_times_read": 46472, "article_text": "Mehsud\u2019s death is instant. Nor, described unambiguously as a terrorist, does he seem undeserving ", "comments": [{"comment_id": 106, "article_id": 2, "user_id": "1006", "post_on_date": {"day": 13, "month": 1, "year": 2015, "time": '14:16:25'}, "comment_text": 'comment:Text', "score": 7.7}, {"comment_id": 107, "article_id": 2, "user_id": "1006", "post_on_date": {"day": 4, "month": 4, "year": 2006, "time": '23:7:58'}, "comment_text": 'comment:Text', "score": 1.7}]})
db.article.insert({"article_type": "Perspective opinion and commentary", "article_section": "Fitness + Well-being", "article_id": 3, "post_on_date": {"day": 7, "month": 10, "year": 2014, "time": '3:45:23'}, "reportor_name": "Carrie Robinson", "similar_stories": ['similar2', 'similar'], "num_times_read": 252900, "article_text": "Study. It is hard to imagine an environment that is more stimulating or more congenial", "comments": [{"comment_id": 107, "article_id": 3, "user_id": "1007", "post_on_date": {"day": 7, "month": 9, "year": 2001, "time": '21:16:46'}, "comment_text": 'comment:Text', "score": 5.1}, {"comment_id": 108, "article_id": 3, "user_id": "1007", "post_on_date": {"day": 2, "month": 12, "year": 2011, "time": '13:41:12'}, "comment_text": 'comment:Text', "score": 9.3}]})
db.article.insert({"article_type": "Perspective opinion and commentary", "article_section": "Entertainment", "article_id": 4, "post_on_date": {"day": 11, "month": 5, "year": 2006, "time": '2:59:16'}, "reportor_name": "Lucy Harper", "similar_stories": ['similar2', 'similar'], "num_times_read": 411832, "article_text": "This book was written when I spent a year at the Princeton Institute for Advanced", "comments": [{"comment_id": 109, "article_id": 4, "user_id": "1009", "post_on_date": {"day": 20, "month": 5, "year": 2003, "time": '18:54:32'}, "comment_text": 'comment:Text', "score": 7.6}, {"comment_id": 110, "article_id": 4, "user_id": "1009", "post_on_date": {"day": 22, "month": 11, "year": 2014, "time": '4:15:50'}, "comment_text": 'comment:Text', "score": 3.4}]})
db.article.insert({"article_type": "Book review", "article_section": "Food + Drink", "article_id": 5, "post_on_date": {"day": 5, "month": 6, "year": 2007, "time": '6:1:14'}, "reportor_name": "Robert Miller", "similar_stories": ['similar2', 'similar'], "num_times_read": 267398, "article_text": "point of view of the executioners. A technology that is almost magical gives its ", "comments": [{"comment_id": 110, "article_id": 5, "user_id": "1010", "post_on_date": {"day": 13, "month": 4, "year": 2009, "time": '22:40:44'}, "comment_text": 'comment:Text', "score": 2.5}, {"comment_id": 111, "article_id": 5, "user_id": "1010", "post_on_date": {"day": 1, "month": 5, "year": 2009, "time": '22:40:53'}, "comment_text": 'comment:Text', "score": 7.8}]})
db.article.insert({"article_type": "Perspective opinion and commentary", "article_section": "World", "article_id": 6, "post_on_date": {"day": 23, "month": 6, "year": 2014, "time": '0:44:10'}, "reportor_name": "Daniel Melville", "similar_stories": ['similar2', 'similar'], "num_times_read": 455573, "article_text": "Greg Feldman, and David Price\u2014for being on the loo", "comments": [{"comment_id": 112, "article_id": 6, "user_id": "1012", "post_on_date": {"day": 29, "month": 1, "year": 2007, "time": '9:8:21'}, "comment_text": 'comment:Text', "score": 0.3}, {"comment_id": 113, "article_id": 6, "user_id": "1012", "post_on_date": {"day": 15, "month": 10, "year": 2007, "time": '0:36:28'}, "comment_text": 'comment:Text', "score": 8.0}]})
db.article.insert({"article_type": "Clinical case study", "article_section": "Entertainment", "article_id": 7, "post_on_date": {"day": 26, "month": 12, "year": 2015, "time": '16:30:43'}, "reportor_name": "Paula Scheppke", "similar_stories": ['similar2', 'similar'], "num_times_read": 7277, "article_text": "drone operators who can see him as if close up, reclining on the roof of his house on a ", "comments": [{"comment_id": 113, "article_id": 7, "user_id": "1013", "post_on_date": {"day": 28, "month": 12, "year": 2015, "time": '7:10:42'}, "comment_text": 'comment:Text', "score": 3.0}, {"comment_id": 114, "article_id": 7, "user_id": "1013", "post_on_date": {"day": 2, "month": 11, "year": 2016, "time": '3:1:36'}, "comment_text": 'comment:Text', "score": 7.2}]})
db.article.insert({"article_type": "Perspective opinion and commentary", "article_section": "Economic", "article_id": 8, "post_on_date": {"day": 11, "month": 5, "year": 2011, "time": '7:56:41'}, "reportor_name": "Kenneth Sickler", "similar_stories": ['similar2', 'similar'], "num_times_read": 762150, "article_text": "some of the arguments in this book in my regular column for ", "comments": [{"comment_id": 114, "article_id": 8, "user_id": "1014", "post_on_date": {"day": 13, "month": 12, "year": 2001, "time": '19:36:19'}, "comment_text": 'comment:Text', "score": 9.3}, {"comment_id": 115, "article_id": 8, "user_id": "1014", "post_on_date": {"day": 5, "month": 5, "year": 2016, "time": '20:41:14'}, "comment_text": 'comment:Text', "score": 6.9}]})
db.article.insert({"article_type": "Review article", "article_section": "Economic", "article_id": 9, "post_on_date": {"day": 27, "month": 6, "year": 2001, "time": '9:46:54'}, "reportor_name": "Gordon Black", "similar_stories": ['similar2', 'similar'], "num_times_read": 527267, "article_text": "cloud dissipated, all that remained of Mehsud was a detached torso. Eleven others died: his wife, his ", "comments": [{"comment_id": 115, "article_id": 9, "user_id": "1015", "post_on_date": {"day": 15, "month": 2, "year": 2006, "time": '6:43:7'}, "comment_text": 'comment:Text', "score": 1.0}, {"comment_id": 116, "article_id": 9, "user_id": "1015", "post_on_date": {"day": 21, "month": 1, "year": 2016, "time": '9:34:58'}, "comment_text": 'comment:Text', "score": 7.8}]})
db.article.insert({"article_type": "Original research", "article_section": "House + Home", "article_id": 10, "post_on_date": {"day": 18, "month": 6, "year": 2001, "time": '12:8:34'}, "reportor_name": "Irma Martin", "similar_stories": ['similar2', 'similar'], "num_times_read": 186186, "article_text": "watched a live video feed relaying closeup footage of one of the most wanted terrorists ", "comments": [{"comment_id": 116, "article_id": 10, "user_id": "1016", "post_on_date": {"day": 8, "month": 2, "year": 2014, "time": '14:58:42'}, "comment_text": 'comment:Text', "score": 8.0}, {"comment_id": 117, "article_id": 10, "user_id": "1016", "post_on_date": {"day": 5, "month": 10, "year": 2007, "time": '13:8:25'}, "comment_text": 'comment:Text', "score": 3.7}]})
db.article.insert({"article_type": "Clinical trial", "article_section": "Political", "article_id": 11, "post_on_date": {"day": 8, "month": 3, "year": 2016, "time": '1:19:57'}, "reportor_name": "Raymond Chamberlain", "similar_stories": ['similar2', 'similar'], "num_times_read": 112290, "article_text": "the Predator\u2019s targeters could see Mehsud\u2019s entire body, not just the top of his head. \u201cIt was a perfect picture,\u201d Malik, ", "comments": [{"comment_id": 117, "article_id": 11, "user_id": "1017", "post_on_date": {"day": 13, "month": 10, "year": 2015, "time": '12:58:32'}, "comment_text": 'comment:Text', "score": 0.4}, {"comment_id": 118, "article_id": 11, "user_id": "1017", "post_on_date": {"day": 7, "month": 3, "year": 2006, "time": '5:51:38'}, "comment_text": 'comment:Text', "score": 6.3}]})
db.article.insert({"article_type": "Review article", "article_section": "Faith & Values", "article_id": 12, "post_on_date": {"day": 22, "month": 2, "year": 2002, "time": '23:11:14'}, "reportor_name": "Melissa Guzman", "similar_stories": ['similar2', 'similar'], "num_times_read": 905748, "article_text": "anthropology department at New York University, M. V. Ramana\u2019s series at Princeton\u2019s", "comments": [{"comment_id": 118, "article_id": 12, "user_id": "1018", "post_on_date": {"day": 1, "month": 8, "year": 2016, "time": '6:8:34'}, "comment_text": 'comment:Text', "score": 4.7}, {"comment_id": 119, "article_id": 12, "user_id": "1018", "post_on_date": {"day": 27, "month": 5, "year": 2003, "time": '1:34:1'}, "comment_text": 'comment:Text', "score": 9.0}]})
db.article.insert({"article_type": "Clinical case study", "article_section": "Sports", "article_id": 13, "post_on_date": {"day": 6, "month": 11, "year": 2004, "time": '10:51:46'}, "reportor_name": "Randy Smith", "similar_stories": ['similar2', 'similar'], "num_times_read": 230520, "article_text": "hot evening as his wife attends to his medical needs. They get to frame the picture while ", "comments": [{"comment_id": 119, "article_id": 13, "user_id": "1019", "post_on_date": {"day": 28, "month": 11, "year": 2012, "time": '13:8:34'}, "comment_text": 'comment:Text', "score": 3.6}, {"comment_id": 120, "article_id": 13, "user_id": "1019", "post_on_date": {"day": 21, "month": 3, "year": 2016, "time": '4:30:55'}, "comment_text": 'comment:Text', "score": 9.2}]})
db.article.insert({"article_type": "Clinical trial", "article_section": "Technology", "article_id": 14, "post_on_date": {"day": 22, "month": 4, "year": 2009, "time": '5:37:23'}, "reportor_name": "Kathryn Jones", "similar_stories": ['similar2', 'similar'], "num_times_read": 884295, "article_text": "and intimacy, the scene is mediated entirely through a single sense\u2014 vision. ", "comments": [{"comment_id": 120, "article_id": 14, "user_id": "1020", "post_on_date": {"day": 16, "month": 5, "year": 2010, "time": '1:40:31'}, "comment_text": 'comment:Text', "score": 8.7}, {"comment_id": 121, "article_id": 14, "user_id": "1020", "post_on_date": {"day": 21, "month": 9, "year": 2017, "time": '12:12:26'}, "comment_text": 'comment:Text', "score": 7.0}]})
db.article.insert({"article_type": "Book review", "article_section": "Food + Drink", "article_id": 15, "post_on_date": {"day": 4, "month": 5, "year": 2015, "time": '11:37:29'}, "reportor_name": "Andrew Rivera", "similar_stories": ['similar2', 'similar'], "num_times_read": 480576, "article_text": " and ideas; Joan Scott, who helped me think through the nature of \u201cremote intimacy\u201d; ", "comments": [{"comment_id": 121, "article_id": 15, "user_id": "1021", "post_on_date": {"day": 23, "month": 5, "year": 2000, "time": '19:18:50'}, "comment_text": 'comment:Text', "score": 1.8}, {"comment_id": 122, "article_id": 15, "user_id": "1021", "post_on_date": {"day": 1, "month": 1, "year": 2011, "time": '14:28:12'}, "comment_text": 'comment:Text', "score": 3.5}]})
db.article.insert({"article_type": "Clinical case study", "article_section": "Technology", "article_id": 16, "post_on_date": {"day": 25, "month": 3, "year": 2004, "time": '21:30:40'}, "reportor_name": "Temple Pamintuan", "similar_stories": ['similar2', 'similar'], "num_times_read": 267971, "article_text": "thunderbolt from the sky. Seen from Virginia, the drone strike is quick, clean, and bloodless. ", "comments": [{"comment_id": 122, "article_id": 16, "user_id": "1022", "post_on_date": {"day": 26, "month": 12, "year": 2008, "time": '8:1:16'}, "comment_text": 'comment:Text', "score": 1.5}, {"comment_id": 123, "article_id": 16, "user_id": "1022", "post_on_date": {"day": 18, "month": 5, "year": 2013, "time": '2:25:15'}, "comment_text": 'comment:Text', "score": 4.8}]})
db.article.insert({"article_type": "Book review", "article_section": "Political", "article_id": 17, "post_on_date": {"day": 21, "month": 11, "year": 2000, "time": '22:29:41'}, "reportor_name": "Ronald Doss", "similar_stories": ['similar2', 'similar'], "num_times_read": 794994, "article_text": "thunderbolt from the sky. Seen from Virginia, the drone strike is quick, clean, and bloodless. ", "comments": [{"comment_id": 123, "article_id": 17, "user_id": "1023", "post_on_date": {"day": 11, "month": 1, "year": 2003, "time": '1:19:11'}, "comment_text": 'comment:Text', "score": 8.9}, {"comment_id": 124, "article_id": 17, "user_id": "1023", "post_on_date": {"day": 24, "month": 2, "year": 2013, "time": '9:42:51'}, "comment_text": 'comment:Text', "score": 5.1}]})
db.article.insert({"article_type": "Review article", "article_section": "World", "article_id": 18, "post_on_date": {"day": 22, "month": 1, "year": 2010, "time": '6:23:41'}, "reportor_name": "Andrea Prewitt", "similar_stories": ['similar2', 'similar'], "num_times_read": 519321, "article_text": "diabetes and a kidney ailment, was receiving an intravenous drip. The video was being captured ", "comments": [{"comment_id": 125, "article_id": 18, "user_id": "1025", "post_on_date": {"day": 24, "month": 1, "year": 2013, "time": '18:21:2'}, "comment_text": 'comment:Text', "score": 3.9}, {"comment_id": 126, "article_id": 18, "user_id": "1025", "post_on_date": {"day": 9, "month": 1, "year": 2007, "time": '21:42:36'}, "comment_text": 'comment:Text', "score": 9.3}]})
db.article.insert({"article_type": "Clinical case study", "article_section": "House + Home", "article_id": 19, "post_on_date": {"day": 12, "month": 3, "year": 2013, "time": '4:46:18'}, "reportor_name": "Jerry May", "similar_stories": ['similar2', 'similar'], "num_times_read": 453354, "article_text": "the Bulletin of Atomic Scientists. A succession of editors there\u2014Josh Schollmeyer, Mindy Kay Bricker, John Mecklin, Sasha Scoblic, and Elisabeth ", "comments": [{"comment_id": 126, "article_id": 19, "user_id": "1026", "post_on_date": {"day": 5, "month": 1, "year": 2005, "time": '11:44:15'}, "comment_text": 'comment:Text', "score": 9.7}, {"comment_id": 127, "article_id": 19, "user_id": "1026", "post_on_date": {"day": 22, "month": 12, "year": 2005, "time": '12:50:7'}, "comment_text": 'comment:Text', "score": 4.9}]})
db.article.insert({"article_type": "Clinical case study", "article_section": "World", "article_id": 20, "post_on_date": {"day": 27, "month": 1, "year": 2004, "time": '9:32:27'}, "reportor_name": "Edith Ayala", "similar_stories": ['similar2', 'similar'], "num_times_read": 167651, "article_text": " Freeman Dyson, who, as smart as ever at ninety-one, is deeply com", "comments": [{"comment_id": 127, "article_id": 20, "user_id": "1027", "post_on_date": {"day": 9, "month": 2, "year": 2016, "time": '23:56:3'}, "comment_text": 'comment:Text', "score": 4.6}, {"comment_id": 128, "article_id": 20, "user_id": "1027", "post_on_date": {"day": 14, "month": 10, "year": 2003, "time": '17:24:56'}, "comment_text": 'comment:Text', "score": 3.3}]})
db.article.insert({"article_type": "Perspective opinion and commentary", "article_section": "Autos", "article_id": 21, "post_on_date": {"day": 21, "month": 5, "year": 2016, "time": '13:26:2'}, "reportor_name": "Luella Joyner", "similar_stories": ['similar2', 'similar'], "num_times_read": 174459, "article_text": "chapter on the anthropology of drones that was ", "comments": [{"comment_id": 128, "article_id": 21, "user_id": "1028", "post_on_date": {"day": 13, "month": 10, "year": 2009, "time": '19:50:35'}, "comment_text": 'comment:Text', "score": 9.6}, {"comment_id": 129, "article_id": 21, "user_id": "1028", "post_on_date": {"day": 17, "month": 5, "year": 2009, "time": '4:3:44'}, "comment_text": 'comment:Text', "score": 2.1}]})
db.article.insert({"article_type": "Clinical case study", "article_section": "Food + Drink", "article_id": 22, "post_on_date": {"day": 13, "month": 4, "year": 2015, "time": '20:22:52'}, "reportor_name": "Julie Slaughter", "similar_stories": ['similar2', 'similar'], "num_times_read": 527870, "article_text": "Greg Feldman, and David Price\u2014for being on the loo", "comments": [{"comment_id": 129, "article_id": 22, "user_id": "1029", "post_on_date": {"day": 9, "month": 8, "year": 2000, "time": '18:6:27'}, "comment_text": 'comment:Text', "score": 7.0}, {"comment_id": 130, "article_id": 22, "user_id": "1029", "post_on_date": {"day": 7, "month": 12, "year": 2013, "time": '23:18:46'}, "comment_text": 'comment:Text', "score": 5.6}]})
db.article.insert({"article_type": "Review article", "article_section": "Economic", "article_id": 23, "post_on_date": {"day": 28, "month": 10, "year": 2006, "time": '13:43:18'}, "reportor_name": "Linda Pickett", "similar_stories": ['similar2', 'similar'], "num_times_read": 221952, "article_text": "written in response to an invitation from Matthew Evangel", "comments": [{"comment_id": 131, "article_id": 23, "user_id": "1031", "post_on_date": {"day": 8, "month": 5, "year": 2008, "time": '4:52:8'}, "comment_text": 'comment:Text', "score": 3.8}, {"comment_id": 132, "article_id": 23, "user_id": "1031", "post_on_date": {"day": 25, "month": 1, "year": 2017, "time": '9:43:19'}, "comment_text": 'comment:Text', "score": 7.9}]})
db.article.insert({"article_type": "Clinical case study", "article_section": "Economic", "article_id": 24, "post_on_date": {"day": 28, "month": 6, "year": 2011, "time": '11:3:43'}, "reportor_name": "Helen White", "similar_stories": ['similar2', 'similar'], "num_times_read": 467317, "article_text": "in Pakistan. Baitullah Mehsud, the leader of the Taliban in Pakistan, could be seen ", "comments": [{"comment_id": 132, "article_id": 24, "user_id": "1032", "post_on_date": {"day": 24, "month": 10, "year": 2014, "time": '5:33:28'}, "comment_text": 'comment:Text', "score": 7.6}, {"comment_id": 133, "article_id": 24, "user_id": "1032", "post_on_date": {"day": 26, "month": 8, "year": 2003, "time": '18:15:51'}, "comment_text": 'comment:Text', "score": 2.7}]})
db.article.insert({"article_type": "Review article", "article_section": "Entertainment", "article_id": 25, "post_on_date": {"day": 16, "month": 11, "year": 2006, "time": '18:50:19'}, "reportor_name": "Vernon Cobb", "similar_stories": ['similar2', 'similar'], "num_times_read": 701985, "article_text": "es from the Network of Concerned Anthropologists\u2014particularly Catherine Besteman, ", "comments": [{"comment_id": 133, "article_id": 25, "user_id": "1033", "post_on_date": {"day": 15, "month": 2, "year": 2008, "time": '16:30:47'}, "comment_text": 'comment:Text', "score": 5.6}, {"comment_id": 134, "article_id": 25, "user_id": "1033", "post_on_date": {"day": 8, "month": 8, "year": 2004, "time": '21:29:0'}, "comment_text": 'comment:Text', "score": 8.2}]})
db.article.insert({"article_type": "Original research", "article_section": "House + Home", "article_id": 26, "post_on_date": {"day": 24, "month": 12, "year": 2016, "time": '9:9:41'}, "reportor_name": "Kari Johnson", "similar_stories": ['similar2', 'similar'], "num_times_read": 233575, "article_text": "owners, who are looking on the scene from high in the sky, a godlike power over ", "comments": [{"comment_id": 134, "article_id": 26, "user_id": "1034", "post_on_date": {"day": 4, "month": 1, "year": 2000, "time": '8:43:25'}, "comment_text": 'comment:Text', "score": 5.2}, {"comment_id": 135, "article_id": 26, "user_id": "1034", "post_on_date": {"day": 4, "month": 3, "year": 2004, "time": '22:58:33'}, "comment_text": 'comment:Text', "score": 4.1}]})
db.article.insert({"article_type": "Clinical trial", "article_section": "House + Home", "article_id": 27, "post_on_date": {"day": 6, "month": 12, "year": 2010, "time": '15:40:20'}, "reportor_name": "Jeff Shively", "similar_stories": ['similar2', 'similar'], "num_times_read": 443616, "article_text": "cloud dissipated, all that remained of Mehsud was a detached torso. Eleven others died: his wife, his ", "comments": [{"comment_id": 136, "article_id": 27, "user_id": "1036", "post_on_date": {"day": 11, "month": 8, "year": 2003, "time": '3:12:11'}, "comment_text": 'comment:Text', "score": 1.0}, {"comment_id": 137, "article_id": 27, "user_id": "1036", "post_on_date": {"day": 3, "month": 1, "year": 2002, "time": '15:33:33'}, "comment_text": 'comment:Text', "score": 4.6}]})
db.article.insert({"article_type": "Review article", "article_section": "Sports", "article_id": 28, "post_on_date": {"day": 3, "month": 5, "year": 2003, "time": '17:3:16'}, "reportor_name": "Shannon Bower", "similar_stories": ['similar2', 'similar'], "num_times_read": 785762, "article_text": "of death. Twelve people die altogether, but the narrative marks only Mehsud\u2019s death as significant. ", "comments": [{"comment_id": 139, "article_id": 28, "user_id": "1039", "post_on_date": {"day": 25, "month": 6, "year": 2012, "time": '14:35:10'}, "comment_text": 'comment:Text', "score": 0.5}, {"comment_id": 140, "article_id": 28, "user_id": "1039", "post_on_date": {"day": 25, "month": 1, "year": 2014, "time": '13:47:9'}, "comment_text": 'comment:Text', "score": 1.3}]})
db.article.insert({"article_type": "Book review", "article_section": "Food + Drink", "article_id": 29, "post_on_date": {"day": 8, "month": 6, "year": 2004, "time": '23:52:44'}, "reportor_name": "Doris Koenen", "similar_stories": ['similar2', 'similar'], "num_times_read": 239187, "article_text": "The other deaths are almost outside the frame. And in a way that amplifies the strange mix of distance ", "comments": [{"comment_id": 156, "article_id": 29, "user_id": "1056", "post_on_date": {"day": 22, "month": 11, "year": 2004, "time": '18:23:52'}, "comment_text": 'comment:Text', "score": 4.0}, {"comment_id": 157, "article_id": 29, "user_id": "1056", "post_on_date": {"day": 9, "month": 10, "year": 2014, "time": '0:2:37'}, "comment_text": 'comment:Text', "score": 2.3}]})
db.article.insert({"article_type": "Clinical case study", "article_section": "Food + Drink", "article_id": 30, "post_on_date": {"day": 6, "month": 7, "year": 2007, "time": '14:22:41'}, "reportor_name": "Lisa Hoefert", "similar_stories": ['similar2', 'similar'], "num_times_read": 793585, "article_text": "told me recently that Mehsud was resting on his back. Malik, using his hands to make a picture frame, explained that ", "comments": [{"comment_id": 159, "article_id": 30, "user_id": "1059", "post_on_date": {"day": 18, "month": 9, "year": 2009, "time": '21:19:26'}, "comment_text": 'comment:Text', "score": 9.9}, {"comment_id": 160, "article_id": 30, "user_id": "1059", "post_on_date": {"day": 5, "month": 12, "year": 2007, "time": '12:42:55'}, "comment_text": 'comment:Text', "score": 8.1}]})
db.article.insert({"article_type": "Clinical case study", "article_section": "Economic", "article_id": 31, "post_on_date": {"day": 21, "month": 12, "year": 2001, "time": '9:40:12'}, "reportor_name": "Richard Nations", "similar_stories": ['similar2', 'similar'], "num_times_read": 332864, "article_text": "in Pakistan. Baitullah Mehsud, the leader of the Taliban in Pakistan, could be seen ", "comments": [{"comment_id": 160, "article_id": 31, "user_id": "1060", "post_on_date": {"day": 4, "month": 8, "year": 2006, "time": '3:43:28'}, "comment_text": 'comment:Text', "score": 5.0}, {"comment_id": 161, "article_id": 31, "user_id": "1060", "post_on_date": {"day": 13, "month": 1, "year": 2005, "time": '21:5:10'}, "comment_text": 'comment:Text', "score": 1.9}]})
db.article.insert({"article_type": "Book review", "article_section": "Autos", "article_id": 32, "post_on_date": {"day": 30, "month": 8, "year": 2000, "time": '16:43:11'}, "reportor_name": "Nora Reyes", "similar_stories": ['similar2', 'similar'], "num_times_read": 889940, "article_text": "drone operators who can see him as if close up, reclining on the roof of his house on a ", "comments": [{"comment_id": 163, "article_id": 32, "user_id": "1063", "post_on_date": {"day": 10, "month": 9, "year": 2016, "time": '22:9:46'}, "comment_text": 'comment:Text', "score": 9.8}, {"comment_id": 164, "article_id": 32, "user_id": "1063", "post_on_date": {"day": 28, "month": 7, "year": 2017, "time": '23:9:32'}, "comment_text": 'comment:Text', "score": 0.7}]})
db.article.insert({"article_type": "Clinical trial", "article_section": "Technology", "article_id": 33, "post_on_date": {"day": 7, "month": 12, "year": 2015, "time": '13:38:38'}, "reportor_name": "James Haun", "similar_stories": ['similar2', 'similar'], "num_times_read": 658653, "article_text": "diabetes and a kidney ailment, was receiving an intravenous drip. The video was being captured ", "comments": [{"comment_id": 164, "article_id": 33, "user_id": "1064", "post_on_date": {"day": 21, "month": 11, "year": 2012, "time": '14:25:30'}, "comment_text": 'comment:Text', "score": 6.0}, {"comment_id": 165, "article_id": 33, "user_id": "1064", "post_on_date": {"day": 17, "month": 5, "year": 2001, "time": '0:6:34'}, "comment_text": 'comment:Text', "score": 5.7}]})
db.article.insert({"article_type": "Book review", "article_section": "Technology", "article_id": 34, "post_on_date": {"day": 28, "month": 4, "year": 2000, "time": '13:56:35'}, "reportor_name": "George Mcdonald", "similar_stories": ['similar2', 'similar'], "num_times_read": 17135, "article_text": "written in response to an invitation from Matthew Evangel", "comments": [{"comment_id": 165, "article_id": 34, "user_id": "1065", "post_on_date": {"day": 3, "month": 7, "year": 2009, "time": '21:41:10'}, "comment_text": 'comment:Text', "score": 8.7}, {"comment_id": 166, "article_id": 34, "user_id": "1065", "post_on_date": {"day": 11, "month": 12, "year": 2014, "time": '5:59:28'}, "comment_text": 'comment:Text', "score": 0.2}]})
db.article.insert({"article_type": "Book review", "article_section": "Food + Drink", "article_id": 35, "post_on_date": {"day": 27, "month": 2, "year": 2004, "time": '1:26:36'}, "reportor_name": "Sabrina Mertens", "similar_stories": ['similar2', 'similar'], "num_times_read": 98784, "article_text": "to writing. Many colleagues at the Institute helped shaped my thinking, but six deserve special mention\u2014Didier ", "comments": [{"comment_id": 166, "article_id": 35, "user_id": "1066", "post_on_date": {"day": 18, "month": 8, "year": 2001, "time": '16:57:20'}, "comment_text": 'comment:Text', "score": 8.1}, {"comment_id": 167, "article_id": 35, "user_id": "1066", "post_on_date": {"day": 26, "month": 8, "year": 2002, "time": '12:21:17'}, "comment_text": 'comment:Text', "score": 3.6}]})
db.article.insert({"article_type": "Clinical trial", "article_section": "Entertainment", "article_id": 36, "post_on_date": {"day": 4, "month": 5, "year": 2016, "time": '15:57:20'}, "reportor_name": "Helen Johnson", "similar_stories": ['similar2', 'similar'], "num_times_read": 933698, "article_text": "he does not even realize he is in it. Without warning, he is killed as if by a god\u2019s ", "comments": [{"comment_id": 167, "article_id": 36, "user_id": "1067", "post_on_date": {"day": 23, "month": 10, "year": 2012, "time": '6:33:21'}, "comment_text": 'comment:Text', "score": 2.7}, {"comment_id": 168, "article_id": 36, "user_id": "1067", "post_on_date": {"day": 23, "month": 7, "year": 2005, "time": '16:16:2'}, "comment_text": 'comment:Text', "score": 0.9}]})
db.article.insert({"article_type": "Clinical case study", "article_section": "World", "article_id": 37, "post_on_date": {"day": 25, "month": 12, "year": 2017, "time": '0:56:2'}, "reportor_name": "Eula Stinser", "similar_stories": ['similar2', 'similar'], "num_times_read": 944084, "article_text": "some of the arguments in this book in my regular column for ", "comments": [{"comment_id": 168, "article_id": 37, "user_id": "1068", "post_on_date": {"day": 10, "month": 12, "year": 2005, "time": '18:14:14'}, "comment_text": 'comment:Text', "score": 3.6}, {"comment_id": 169, "article_id": 37, "user_id": "1068", "post_on_date": {"day": 1, "month": 8, "year": 2011, "time": '4:33:46'}, "comment_text": 'comment:Text', "score": 5.8}]})
db.article.insert({"article_type": "Book review", "article_section": "Entertainment", "article_id": 38, "post_on_date": {"day": 26, "month": 3, "year": 2009, "time": '21:27:30'}, "reportor_name": "Margaret Stubbs", "similar_stories": ['similar2', 'similar'], "num_times_read": 520785, "article_text": "reclining on the rooftop of his father-inlaw\u2019s house, in Zanghara, a hamlet in South ", "comments": [{"comment_id": 169, "article_id": 38, "user_id": "1069", "post_on_date": {"day": 10, "month": 9, "year": 2009, "time": '23:25:40'}, "comment_text": 'comment:Text', "score": 1.3}, {"comment_id": 170, "article_id": 38, "user_id": "1069", "post_on_date": {"day": 2, "month": 10, "year": 2011, "time": '21:16:18'}, "comment_text": 'comment:Text', "score": 8.5}]})
db.article.insert({"article_type": "Clinical case study", "article_section": "Economic", "article_id": 39, "post_on_date": {"day": 9, "month": 8, "year": 2015, "time": '3:57:46'}, "reportor_name": "Ronald Campbell", "similar_stories": ['similar2', 'similar'], "num_times_read": 867053, "article_text": "chapter on the anthropology of drones that was ", "comments": [{"comment_id": 170, "article_id": 39, "user_id": "1070", "post_on_date": {"day": 20, "month": 12, "year": 2013, "time": '15:27:0'}, "comment_text": 'comment:Text', "score": 5.0}, {"comment_id": 171, "article_id": 39, "user_id": "1070", "post_on_date": {"day": 14, "month": 3, "year": 2015, "time": '0:36:56'}, "comment_text": 'comment:Text', "score": 8.9}]})
db.article.insert({"article_type": "Clinical case study", "article_section": "Fitness + Well-being", "article_id": 40, "post_on_date": {"day": 23, "month": 10, "year": 2017, "time": '5:11:48'}, "reportor_name": "Donna Larez", "similar_stories": ['similar2', 'similar'], "num_times_read": 129553, "article_text": "ptu minilecture that provided ", "comments": [{"comment_id": 171, "article_id": 40, "user_id": "1071", "post_on_date": {"day": 7, "month": 4, "year": 2005, "time": '10:47:14'}, "comment_text": 'comment:Text', "score": 3.5}, {"comment_id": 172, "article_id": 40, "user_id": "1071", "post_on_date": {"day": 15, "month": 7, "year": 2005, "time": '9:15:39'}, "comment_text": 'comment:Text', "score": 0.2}]})
db.article.insert({"article_type": "Clinical case study", "article_section": "Food + Drink", "article_id": 41, "post_on_date": {"day": 10, "month": 9, "year": 2013, "time": '19:20:15'}, "reportor_name": "Josephine Hart", "similar_stories": ['similar2', 'similar'], "num_times_read": 987001, "article_text": " my mind, I gave presentations to several audiences, whose members provided helpful feedback\u2014the ", "comments": [{"comment_id": 172, "article_id": 41, "user_id": "1072", "post_on_date": {"day": 1, "month": 12, "year": 2009, "time": '11:30:38'}, "comment_text": 'comment:Text', "score": 9.6}, {"comment_id": 173, "article_id": 41, "user_id": "1072", "post_on_date": {"day": 6, "month": 6, "year": 2010, "time": '22:37:10'}, "comment_text": 'comment:Text', "score": 6.7}]})
db.article.insert({"article_type": "Clinical case study", "article_section": "Entertainment", "article_id": 42, "post_on_date": {"day": 2, "month": 2, "year": 2001, "time": '17:13:59'}, "reportor_name": "Jackie Boyce", "similar_stories": ['similar2', 'similar'], "num_times_read": 708188, "article_text": "the Bulletin of Atomic Scientists. A succession of editors there\u2014Josh Schollmeyer, Mindy Kay Bricker, John Mecklin, Sasha Scoblic, and Elisabeth ", "comments": [{"comment_id": 174, "article_id": 42, "user_id": "1074", "post_on_date": {"day": 1, "month": 7, "year": 2016, "time": '16:46:48'}, "comment_text": 'comment:Text', "score": 5.2}, {"comment_id": 175, "article_id": 42, "user_id": "1074", "post_on_date": {"day": 23, "month": 7, "year": 2015, "time": '9:3:11'}, "comment_text": 'comment:Text', "score": 9.3}]})
db.article.insert({"article_type": "Original research", "article_section": "Entertainment", "article_id": 43, "post_on_date": {"day": 17, "month": 4, "year": 2012, "time": '8:55:10'}, "reportor_name": "Tony Kern", "similar_stories": ['similar2', 'similar'], "num_times_read": 234922, "article_text": "some of the arguments in this book in my regular column for ", "comments": [{"comment_id": 175, "article_id": 43, "user_id": "1075", "post_on_date": {"day": 22, "month": 10, "year": 2003, "time": '7:52:15'}, "comment_text": 'comment:Text', "score": 9.2}, {"comment_id": 176, "article_id": 43, "user_id": "1075", "post_on_date": {"day": 28, "month": 6, "year": 2010, "time": '2:30:3'}, "comment_text": 'comment:Text', "score": 8.7}]})
db.article.insert({"article_type": "Clinical trial", "article_section": "Economic", "article_id": 44, "post_on_date": {"day": 17, "month": 7, "year": 2015, "time": '17:44:39'}, "reportor_name": "Tom Kim", "similar_stories": ['similar2', 'similar'], "num_times_read": 385115, "article_text": "ptu minilecture that provided ", "comments": [{"comment_id": 176, "article_id": 44, "user_id": "1076", "post_on_date": {"day": 3, "month": 12, "year": 2006, "time": '17:51:15'}, "comment_text": 'comment:Text', "score": 2.1}, {"comment_id": 177, "article_id": 44, "user_id": "1076", "post_on_date": {"day": 7, "month": 7, "year": 2014, "time": '19:5:37'}, "comment_text": 'comment:Text', "score": 5.6}]})
db.article.insert({"article_type": "Clinical case study", "article_section": "Travel + Outdoors", "article_id": 45, "post_on_date": {"day": 15, "month": 8, "year": 2016, "time": '2:5:21'}, "reportor_name": "Paul Caudle", "similar_stories": ['similar2', 'similar'], "num_times_read": 421730, "article_text": "Michael Walzer, also writing on drones, whose questions forced me to think more deeply;", "comments": [{"comment_id": 177, "article_id": 45, "user_id": "1077", "post_on_date": {"day": 14, "month": 3, "year": 2001, "time": '7:17:50'}, "comment_text": 'comment:Text', "score": 3.1}, {"comment_id": 178, "article_id": 45, "user_id": "1077", "post_on_date": {"day": 12, "month": 8, "year": 2003, "time": '19:51:45'}, "comment_text": 'comment:Text', "score": 7.4}]})
db.article.insert({"article_type": "Book review", "article_section": "Travel + Outdoors", "article_id": 46, "post_on_date": {"day": 17, "month": 7, "year": 2013, "time": '5:21:24'}, "reportor_name": "Gail Shafer", "similar_stories": ['similar2', 'similar'], "num_times_read": 132151, "article_text": "who watched the videotape later, said. \u201cWe used to see James Bond movies where he talked into his shoe or his watch. ", "comments": [{"comment_id": 178, "article_id": 46, "user_id": "1078", "post_on_date": {"day": 13, "month": 4, "year": 2016, "time": '10:24:12'}, "comment_text": 'comment:Text', "score": 1.1}, {"comment_id": 179, "article_id": 46, "user_id": "1078", "post_on_date": {"day": 19, "month": 5, "year": 2009, "time": '20:15:48'}, "comment_text": 'comment:Text', "score": 0.2}]})
db.article.insert({"article_type": "Original research", "article_section": "Sports", "article_id": 47, "post_on_date": {"day": 7, "month": 6, "year": 2007, "time": '6:20:36'}, "reportor_name": "Charlie Tarpley", "similar_stories": ['similar2', 'similar'], "num_times_read": 174468, "article_text": "On August 5th, officials at the Central Intelligence Agency, in Langley, Virginia, ", "comments": [{"comment_id": 179, "article_id": 47, "user_id": "1079", "post_on_date": {"day": 29, "month": 3, "year": 2015, "time": '11:52:45'}, "comment_text": 'comment:Text', "score": 0.4}, {"comment_id": 180, "article_id": 47, "user_id": "1079", "post_on_date": {"day": 17, "month": 1, "year": 2004, "time": '14:34:22'}, "comment_text": 'comment:Text', "score": 7.1}]})
db.article.insert({"article_type": "Review article", "article_section": "World", "article_id": 48, "post_on_date": {"day": 3, "month": 5, "year": 2001, "time": '3:54:53'}, "reportor_name": "Thelma Buchana", "similar_stories": ['similar2', 'similar'], "num_times_read": 158293, "article_text": "and intimacy, the scene is mediated entirely through a single sense\u2014 vision. ", "comments": [{"comment_id": 180, "article_id": 48, "user_id": "1080", "post_on_date": {"day": 27, "month": 6, "year": 2001, "time": '18:46:7'}, "comment_text": 'comment:Text', "score": 5.9}, {"comment_id": 181, "article_id": 48, "user_id": "1080", "post_on_date": {"day": 5, "month": 2, "year": 2005, "time": '19:18:14'}, "comment_text": 'comment:Text', "score": 0.6}]})
db.article.insert({"article_type": "Book review", "article_section": "Economic", "article_id": 49, "post_on_date": {"day": 14, "month": 5, "year": 2017, "time": '13:37:14'}, "reportor_name": "Stella Pounds", "similar_stories": ['similar2', 'similar'], "num_times_read": 572807, "article_text": "hovering, undetected, two miles or so above the house. Pakistan\u2019s Interior Minister, A. Rehman Malik, ", "comments": [{"comment_id": 181, "article_id": 49, "user_id": "1081", "post_on_date": {"day": 25, "month": 12, "year": 2016, "time": '22:42:20'}, "comment_text": 'comment:Text', "score": 8.4}, {"comment_id": 182, "article_id": 49, "user_id": "1081", "post_on_date": {"day": 21, "month": 8, "year": 2014, "time": '15:14:3'}, "comment_text": 'comment:Text', "score": 8.4}]})