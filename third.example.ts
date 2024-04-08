/**Ejemplo de git bisect:
Supongamos que has encontrado un bug en tu aplicación y necesitas encontrar 
el commit que lo introdujo:
 */
/*
git bisect start
git bisect bad         # Marca el estado actual como malo (donde está el bug)
git bisect good v1.0   # Marca un commit conocido como bueno (donde no estaba el bug)
# Git ahora te lleva al commit intermedio
# Pruebas si el bug está presente o no
# Dependiendo del resultado, marcas el commit actual como bueno o malo
# Git repetirá este proceso hasta encontrar el commit culpable
git bisect reset       # Termina la búsqueda binaria y restaura el estado original*/


