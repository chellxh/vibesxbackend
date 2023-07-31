\c vibes_dev;

INSERT INTO artists (artist_name, genre, is_favorite) VALUES 
('Thadadoe', 'hip-hop', true), 
('Elsa', 'kids', false), 
('NF', 'hip-hop', true), 
('Lil Wayne', 'hip-hop', true);


INSERT INTO songs (title, artist, album, time, is_favorite, artist_id) VALUES 
(
    'Shidduma',
    'Thadadoe',
    null,
    '2:05',
    true,
    1
  ),
  (
    'Into The Unknown',
    'Elsa',
    'Frozen 2 Soundtrack',
    '3:30',
    false,
    2
  ),
  (
    'Let Em Pray',
    'NF',
    'Hope',
    '3:32',
    true, 
    3
  ),
  ('Hashtag', 'Thadadoe', null, '2:12', true, 1),
  (
    'Toast Freestyle',
    'Thadadoe',
    null,
    '2:00',
    true,
    1
  ),
  ('Right Above It', 'Lil Wayne', 'I Am Not a Human Being', '4:32', true, 4);

  INSERT INTO playlists (playlist_name, song_id) 
  VALUES 
  ('Summer Vibes', 1), 
  ('Summer Vibes', 3), 
  ('Summer Vibes', 4), 
  ('Summer Vibes', 5), 
  ('Summer Vibes', 6),
  ('Winter Vibes', 2);


  -- npm run pg:seed