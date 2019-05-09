-- Format: 
--{twitter_account_id: int,email_address: chararray,phone_number: chararray,user_location: chararray,num_tweets: int}
twitter_account = LOAD '/oracle/stuhomes/yu1357/hk4/HW4-twitter_account.txt' USING PigStorage(',') AS (twitter_account_id: int, email_address: chararray , phone_number: chararray , user_location: chararray , num_tweets: int);


-- Format: 
--{twitter_account_id: int,twitter_account_rank: float}
old_twitter_account_rank = LOAD '/oracle/stuhomes/yu1357/hk4/HW4-old_twitter_account_rank.csv' using PigStorage(',') AS (twitter_account_id:int, twitter_account_rank:float);

--------------------------------first time testing----------------------------
-- Format
--{twitter_account::twitter_account_id: int,twitter_account::email_address: chararray,twitter_account::phone_number: chararray,twitter_account::user_location: chararray,twitter_account::num_tweets: int,old_twitter_account_rank::twitter_account_id: int,old_twitter_account_rank::twitter_account_rank: float}
join_twitter = JOIN twitter_account BY twitter_account_id, old_twitter_account_rank BY twitter_account_id;


--Format
--{twitter_account_id: int,email_address: chararray,twitter_rank: float}
percentile_accounts = FOREACH join_twitter GENERATE $0 AS twitter_account_id, $1 AS email_address, $6 AS twitter_rank;


result1 = FILTER  percentile_accounts BY twitter_rank > 0.3;


DESCRIBE result1;
dump result1;


--------------------------------Second time testing----------------------------
-- Format
--{twitter_account::twitter_account_id: int,twitter_account::email_address: chararray,twitter_account::phone_number: chararray,twitter_account::user_location: chararray,twitter_account::num_tweets: int,old_twitter_account_rank::twitter_account_id: int,old_twitter_account_rank::twitter_account_rank: float}
join_twitter = JOIN twitter_account BY twitter_account_id, old_twitter_account_rank BY twitter_account_id;


--Format
--{twitter_account_id: int,email_address: chararray,twitter_rank: float}
percentile_accounts = FOREACH join_twitter GENERATE $0 AS twitter_account_id, $1 AS email_address, $6 AS twitter_rank;

result2 = FILTER  percentile_accounts BY twitter_rank >  0.0042;


DESCRIBE result2;
STORE result2 INTO task3_2;
dump result2;
--------------------------------thrid time testing----------------------------
-- Format
--{twitter_account::twitter_account_id: int,twitter_account::email_address: chararray,twitter_account::phone_number: chararray,twitter_account::user_location: chararray,twitter_account::num_tweets: int,old_twitter_account_rank::twitter_account_id: int,old_twitter_account_rank::twitter_account_rank: float}
join_twitter = JOIN twitter_account BY twitter_account_id, old_twitter_account_rank BY twitter_account_id;


--Format
--{twitter_account_id: int,email_address: chararray,twitter_rank: float}
percentile_accounts = FOREACH join_twitter GENERATE $0 AS twitter_account_id, $1 AS email_address, $6 AS twitter_rank;

result3 = FILTER  percentile_accounts BY twitter_rank > 0.005;


DESCRIBE result3;
STORE result3 INTO task3_3;
dump result3;