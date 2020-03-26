const categoriasController = controller("categorias", String),
  initCategorias = function initCategorias(list) {
    const flatMap = list.flatMap(e => e.Categoria);
    const set = new Set(flatMap);
    const categs = Array.from(set);
    categoriasController.refresh(categs);

    return list;
  };
