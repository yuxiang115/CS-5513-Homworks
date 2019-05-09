describe 
-- Format: 
--{follower_twitter_account_id: int,subject_twitter_account_id: int}
follows_account = LOAD '/oracle/stuhomes/yu1357/hk4/HW4-follows_account.txt' using PigStorage(',') AS (follower_twitter_account_id: int,subject_twitter_account_id: int);


-- Format: 
--{twitter_account_id: int,email_address: chararray,phone_number: chararray,user_location: chararray,num_tweets: int}
twitter_account = LOAD '/oracle/stuhomes/yu1357/hk4/HW4-twitter_account.txt' USING PigStorage(',') AS (twitter_account_id: int, email_address: chararray , phone_number: chararray , user_location: chararray , num_tweets: int);

-- Format: 
--{twitter_account_id: int,twitter_account_rank: float}
old_twitter_account_rank = LOAD '/oracle/stuhomes/yu1357/hk4/HW4-old_twitter_account_rank.txt' using PigStorage(',') AS (twitter_account_id:int, twitter_account_rank:float);


--Format
--{group: int,follows_account: {(follower_twitter_account_id: int,subject_twitter_account_id: int)}}
B = GROUP follows_account BY follower_twitter_account_id;

--Format
--{group: int,long}
follower = FOREACH B GENERATE group, COUNT($1);

--Format
--{old_twitter_account_rank::twitter_account_id: int,old_twitter_account_rank::twitter_account_rank: float,follower::group: int,long}
follower = JOIN old_twitter_account_rank BY twitter_account_id, follower BY $0;

--Format
--{follower_twitter_account_id: int,follower_rank: float,num_following: long}
follower = FOREACH follower GENERATE $0 AS follower_twitter_account_id, $1 AS follower_rank, $3 AS num_following;

--Format
--{follows_account::follower_twitter_account_id: int,follows_account::subject_twitter_account_id: int,follower::follower_twitter_account_id: int,follower::follower_rank: float,follower::num_following: long}
sub_folnum = JOIN follows_account BY follower_twitter_account_id, follower BY $0;

--Format
--{subject_twitter_account_id: int,follower_rank: float,num_following: long}
sub_count = FOREACH sub_folnum GENERATE $1 AS subject_twitter_account_id, $3 AS follower_rank, $4 AS num_following;

--Format
--{follows_account::follower_twitter_account_id: int,float}
sub_count1 = FOREACH sub_folnum GENERATE $0, (follower_rank/num_following);

--Format
--{group: int,sub_count1: {(follows_account::follower_twitter_account_id: int,float)}}
C = GROUP sub_count1 BY $0;

--Format
--{group: int,{(float)}}
temp = FOREACH C GENERATE group, $1.$1;

--Format
--{group: int,double}
temp1 = FOREACH temp GENERATE $0 , SUM($1);

--Format
--{group: int,double}
result = FOREACH temp1 GENERATE $0, ((1-0.85)/213 + 0.85*$1);

dump result;

STORE result INTO 'task2_ouput' using PigStorage(',');








