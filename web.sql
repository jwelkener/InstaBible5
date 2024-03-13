-- web.sql

CREATE TABLE verses (
    id SERIAL PRIMARY KEY,
    book TEXT,
    book_number INTEGER,
    chapter INTEGER,
    verse INTEGER,
    text TEXT
);

COPY verses (id, book, book_number, chapter, verse, text) 
FROM '/Users/johnwelkener/Desktop/InstaBible5/web.csv' 
DELIMITER ',' CSV HEADER;


