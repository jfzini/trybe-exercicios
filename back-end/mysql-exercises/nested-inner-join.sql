SELECT 
    fa.film_id,
    f.title,
    JSON_ARRAYAGG(CONCAT(a.first_name, ' ', a.last_name)) AS cast
FROM
    film_actor fa
        INNER JOIN
    actor a ON fa.actor_id = a.actor_id
        INNER JOIN
    film f ON fa.film_id = f.film_id
GROUP BY f.film_id;