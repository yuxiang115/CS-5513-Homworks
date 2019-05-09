-- Format: 
--{follower_twitter_account_id: int,subject_twitter_account_id: int}
follows_account = LOAD '/oracle/stuhomes/yu1357/hk4/HW4-follows_account.txt' using PigStorage(',') AS (follower_twitter_account_id: int,subject_twitter_account_id: int);


-- Format: 
--{twitter_account_id: int,email_address: chararray,phone_number: chararray,user_location: chararray,num_tweets: int}
twitter_account = LOAD '/oracle/stuhomes/yu1357/hk4/HW4-twitter_account.txt' USING PigStorage(',') AS (twitter_account_id: int, email_address: chararray , phone_number: chararray , user_location: chararray , num_tweets: int);

-- Format: 
--{twitter_account_id: int,twitter_account_rank: float}
old_twitter_account_rank = LOAD '/oracle/stuhomes/yu1357/hk4/HW4-old_twitter_account_rank.txt' using PigStorage(',') AS (twitter_account_id:int, twitter_account_rank:float);

-- Format: 
--{email_address: chararray,reputation: int,num_questions: int}
stack_overflow_account = LOAD '/oracle/stuhomes/yu1357/hk4/HW4-stack_overflow_account.txt' using PigStorage(',') AS (email_address:chararray, reputation: int, num_questions: int);



--query_1a 1st test
----------------------------------------------------------------------------------
-- Format
-- {twitter_account_id: int,email_address: chararray,phone_number: chararray,user_location: chararray,num_tweets: int}
filter_phone = FILTER twitter_account by STARTSWITH(phone_number, '207');
DESCRIBE filter_phone;

-- Format
-- {group: chararray,filter_phone: {(twitter_account_id: int,email_address: chararray,phone_number: chararray,user_location: chararray,num_tweets: int)}}
grouped_phone = GROUP filter_phone BY SUBSTRING(phone_number, 0, 3);


-- Format
-- {group: chararray,{(email_address: chararray)}}
result_a1 = FOREACH grouped_phone GENERATE group, $1.email_address;
DESCRIBE result_a1;

STORE result_a1 INTO query_1a1;
dump result_a1;


--query_1a 2rd test
----------------------------------------------------------------------------------
-- Format
-- {twitter_account_id: int,email_address: chararray,phone_number: chararray,user_location: chararray,num_tweets: int}
filter_phone = FILTER twitter_account by STARTSWITH(phone_number, '405');
DESCRIBE filter_phone;

-- Format
-- {group: chararray,filter_phone: {(twitter_account_id: int,email_address: chararray,phone_number: chararray,user_location: chararray,num_tweets: int)}}
grouped_phone = GROUP filter_phone BY SUBSTRING(phone_number, 0, 3);
DESCRIBE grouped;


-- Format
-- {group: chararray,{(email_address: chararray)}}
result_a2 = FOREACH grouped_phone GENERATE group, $1.email_address;
DESCRIBE result_a2;

STORE result_a2 INTO query_1a2;
dump result_a2;


--query_1a 3rd test
----------------------------------------------------------------------------------
-- Format
-- {twitter_account_id: int,email_address: chararray,phone_number: chararray,user_location: chararray,num_tweets: int}
filter_phone = FILTER twitter_account by STARTSWITH(phone_number, '919');
DESCRIBE filter_phone;

-- Format
-- {group: chararray,filter_phone: {(twitter_account_id: int,email_address: chararray,phone_number: chararray,user_location: chararray,num_tweets: int)}}
grouped_phone = GROUP filter_phone BY SUBSTRING(phone_number, 0, 3);
DESCRIBE grouped;


-- Format
-- {group: chararray,{(email_address: chararray)}}
result_a3 = FOREACH grouped_phone GENERATE group, $1.email_address;
DESCRIBE result_a3;

STORE result_a3 INTO query_1a3;
dump result_a3;


--query_1b
----------------------------------------------------------------------------------
--Format
--{group: chararray,twitter_account: {(twitter_account_id: int,email_address: chararray,phone_number: chararray,user_location: chararray,num_tweets: int)}}
group_city = GROUP twitter_account BY user_location;


--Format
--result_b = FOREACH group_city GENERATE group AS user_location, COUNT($1) AS num_acc;
result_b = FOREACH group_city GENERATE group AS user_location, COUNT($1) AS num_acc;

DESCRIBE result_b;

STORE result_b INTO query_1b;
dump result_b;

--query_1c  1st test
----------------------------------------------------------------------------------
--Format
--{twitter_account::twitter_account_id: int,twitter_account::email_address: chararray,twitter_account::phone_number: chararray,twitter_account::user_location: chararray,twitter_account::num_tweets: int,stack_overflow_account::email_address: chararray,stack_overflow_account::reputation: int,stack_overflow_account::num_questions: int}
joined = JOIN twitter_account BY email_address, stack_overflow_account by email_address;

--Format
--{twitter_account::twitter_account_id: int,twitter_account::email_address: chararray,twitter_account::phone_number: chararray,twitter_account::user_location: chararray,twitter_account::num_tweets: int,stack_overflow_account::email_address: chararray,stack_overflow_account::reputation: int,stack_overflow_account::num_questions: int}
filtered_num_tweets = FILTER joined BY num_tweets > 990;

--Format
--{twitter_account::num_tweets: int,stack_overflow_account::reputation: int}
email_reputations = FOREACH filtered_num_tweets GENERATE twitter_account::num_tweets, stack_overflow_account::reputation;

--Format
--{group: chararray,email_reputations: {(twitter_account::num_tweets: int,stack_overflow_account::reputation: int)}}
email_reputations_group = GROUP email_reputations ALL;

--Format
--{num_tweets: long,avg_stack_overflow_reputation: double}
result_c1 = FOREACH email_reputations_group GENERATE SUM($1.$0) AS num_tweets, AVG($1.$1) AS avg_stack_overflow_reputation;


DESCRIBE result_c1;
STORE result_c1 INTO query_1c;
dump result_c1;


--query_1c  2rd test
----------------------------------------------------------------------------------
--Format
--{twitter_account::twitter_account_id: int,twitter_account::email_address: chararray,twitter_account::phone_number: chararray,twitter_account::user_location: chararray,twitter_account::num_tweets: int,stack_overflow_account::email_address: chararray,stack_overflow_account::reputation: int,stack_overflow_account::num_questions: int}
joined = JOIN twitter_account BY email_address, stack_overflow_account by email_address;

--Format
--{twitter_account::twitter_account_id: int,twitter_account::email_address: chararray,twitter_account::phone_number: chararray,twitter_account::user_location: chararray,twitter_account::num_tweets: int,stack_overflow_account::email_address: chararray,stack_overflow_account::reputation: int,stack_overflow_account::num_questions: int}
filtered_num_tweets = FILTER joined BY num_tweets > 333;

--Format
--{twitter_account::num_tweets: int,stack_overflow_account::reputation: int}
email_reputations = FOREACH filtered_num_tweets GENERATE twitter_account::num_tweets, stack_overflow_account::reputation;

--Format
--{group: chararray,email_reputations: {(twitter_account::num_tweets: int,stack_overflow_account::reputation: int)}}
email_reputations_group = GROUP email_reputations ALL;

--Format
--{num_tweets: long,avg_stack_overflow_reputation: double}
result_c2 = FOREACH email_reputations_group GENERATE SUM($1.$0) AS num_tweets, AVG($1.$1) AS avg_stack_overflow_reputation;


DESCRIBE result_c2;
STORE result_c2 INTO query_1c2;
dump result_c2;


--query_1c  2rd test
----------------------------------------------------------------------------------
--Format
--{twitter_account::twitter_account_id: int,twitter_account::email_address: chararray,twitter_account::phone_number: chararray,twitter_account::user_location: chararray,twitter_account::num_tweets: int,stack_overflow_account::email_address: chararray,stack_overflow_account::reputation: int,stack_overflow_account::num_questions: int}
joined = JOIN twitter_account BY email_address, stack_overflow_account by email_address;

--Format
--{twitter_account::twitter_account_id: int,twitter_account::email_address: chararray,twitter_account::phone_number: chararray,twitter_account::user_location: chararray,twitter_account::num_tweets: int,stack_overflow_account::email_address: chararray,stack_overflow_account::reputation: int,stack_overflow_account::num_questions: int}
filtered_num_tweets = FILTER joined BY num_tweets > 233;

--Format
--{twitter_account::num_tweets: int,stack_overflow_account::reputation: int}
email_reputations = FOREACH filtered_num_tweets GENERATE twitter_account::num_tweets, stack_overflow_account::reputation;

--Format
--{group: chararray,email_reputations: {(twitter_account::num_tweets: int,stack_overflow_account::reputation: int)}}
email_reputations_group = GROUP email_reputations ALL;

--Format
--{num_tweets: long,avg_stack_overflow_reputation: double}
result_c3 = FOREACH email_reputations_group GENERATE SUM($1.$0) AS num_tweets, AVG($1.$1) AS avg_stack_overflow_reputation;


DESCRIBE result_c3;
STORE result_c3 INTO query_1c3;
dump result_c3;