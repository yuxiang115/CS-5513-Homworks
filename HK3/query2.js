db.article.find({}).sort({"post_on_date.year":-1, "post_on_date.month":-1, "post_on_date.date":-1, "post_on_date.time":-1,}).limit(1)

