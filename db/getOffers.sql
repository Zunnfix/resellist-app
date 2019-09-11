SELECT 
  sellist_users.username,
  sellist_users.email, 
  sellist_products.item, 
  sellist_products.category_id, 
  sellist_products.city, 
  sellist_products.state,
  sellist_products.img 
FROM 
  sellist_users
JOIN 
  sellist_products 
ON 
  sellist_users.id = sellist_products.user_id;