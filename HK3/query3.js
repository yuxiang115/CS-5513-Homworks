db.article.find({"post_on_date.year" : 2019, "post_on_date.month":3}).sort({"num_times_read":-1}).limit(10)