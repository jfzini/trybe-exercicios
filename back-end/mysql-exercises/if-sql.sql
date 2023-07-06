SELECT 
    film_id,
    title,
    IF(title = 'ACE GOLDFINGER',
        'OK',
        'FALTA ASSISTIR') AS 'filme visto?'
FROM
    sakila.film;