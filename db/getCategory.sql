SELECT 
  -- sellist_products.id, 
  -- sellist_products.category_id, 
  sellist_categories.category
FROM 
  sellist_categories
JOIN 
  sellist_products
ON 
  sellist_categories.id = sellist_products.category_id
WHERE
  sellist_products.id = $1;