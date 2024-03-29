SELECT 
    c.customer_id,
    c.first_name,
    c.email,
    c.address_id,
    a.address
FROM
    customer c
        INNER JOIN
    address a ON c.address_id = a.address_id
ORDER BY c.first_name DESC
LIMIT 100;