SELECT * FROM inventario;
SELECT * FROM inventario WHERE id = $1;

DELETE FROM inventario WHERE id = $1;