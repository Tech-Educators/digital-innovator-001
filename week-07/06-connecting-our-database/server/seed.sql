-- Here's the commands we ran, one by one, in Supabase to create our table and make sure we had dummy data to work with
-- -- -- -- --

-- CREATE --
CREATE TABLE jokes_001 (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title TEXT,
  question TEXT,
  punchline TEXT
)

-- Hey, supabase, please create a table which has these columns in it. Make it so that you handle the id (I don't want to worry about that). Also, make these columns *this* type of data.
-- -- -- -- --

-- INSERT --
INSERT INTO jokes_001 (title, question, punchline) VALUES 
('The Chicken Runs', 'Why did the chicken cross the road?', 'THERE’S NO TIME FOR THAT, RUN FEATHERS!'),
('Fishy Pianos', 'What’s the difference between a Piano and a Tuna?', 'You can tuna piano but you can’t piano tuna.'),
('Something Deer', 'What do you call a deer with no eyes?', 'I have No Eye Deer!'),
('Horses Pasta', 'What is a horses favourite pasta?', 'Penneigh'),
('Dentists Awards', 'What do dentists of the year get?', 'A Plaque'),
('Shin man', 'What do you call a man stuck on a shin?', 'Toe-knee')

-- Hey Supabase! Insert stuff into *this* table for me (and put the data under these columns). The values to insert are...
-- -- -- -- --


-- SELECT --
SELECT * FROM jokes_001
-- We can also run a SELECT statement which is more specific: SELECT question, punchline FROM jokes_001
-- -- -- -- --

-- UPDATE --
UPDATE jokes_001 
SET
title = 'A Deer Mistake',
question =  'What do you call a deer with no eyes?',
punchline = 'I have No Eye Deer!'
WHERE id = 4

-- When updating a row we say, "Hey supabase, can you update my something-table? Can you set the something-column data to be this, the other-something-column data to be that, and can you do it where the id matches this number please?"
-- -- -- -- --

-- DELETE --
DELETE FROM jokes_001 WHERE id = 2

-- https://www.youtube.com/watch?v=KnmIoF_2Q4Y