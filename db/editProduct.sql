UPDATE sellist_products
SET item = $1
WHERE id = $2;

SELECT * FROM sellist_products
WHERE id = $2;