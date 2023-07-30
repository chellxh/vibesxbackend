\c vibes_dev;

INSERT INTO songs (title, artist, album, time, is_favorite) VALUES 
(
    'Shidduma',
    'Thadadoe',
    null,
    '2:05',
    true
  ),
  (
    'Into The Unknown',
    'Elsa',
    'Frozen 2 Soundtrack',
    '3:30',
    false
  ),
  (
    'Let Em Pray',
    'NF',
    'Hope',
    '3:32',
    true
  ),
  (
    'Calling',
    'Swae Lee, Nav, A Boogie wit da Hoodie',
    'Spider-man: Across the Spiderverse Soundtrack',
    '3:39',
    true
  ),
  ('Hashtag', 'Thadadoe', null, '2:12', true),
  (
    'Toast Freestyle',
    'Thadadoe',
    null,
    '2:00',
    true
  ),
  ('Right Above It', 'Drake, Lil Wayne', 'I Am Not a Human Being', '4:32', true);

  INSERT INTO artists (song_id, name) 
  VALUES 
  ('1', 'Thadadoe'), 
  ('2', 'Elsa'), 
  ('3', 'NF'), 
  ('4', 'Swae Lee'), 
  ('4', 'Nav'), 
  ('4', 'A Boogie Wit Da Hoodie'), 
  ('5', 'Thadadoe'), 
  ('6', 'Thadadoe'), 
  ('7', 'Drake'), 
  ('7', 'Lil Wayne');