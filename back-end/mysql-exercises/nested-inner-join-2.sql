SELECT 
    a.actor_id,
    CONCAT(a.first_name, ' ', a.last_name) AS full_name,
    JSON_ARRAYAGG(f.title) AS filmography
FROM
    film_actor fa
        INNER JOIN
    actor a ON a.actor_id = fa.actor_id
        INNER JOIN
    film f ON f.film_id = fa.film_id
GROUP BY a.actor_id;

