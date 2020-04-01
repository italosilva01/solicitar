window.addEventListener("load", function(event) {
  const url = "{{ '/assets/json/estabelecimentos.json' | relative_url }}";
  fetch(url)
    .then(r => r.json())
    .then(list => {
      estabelecimentoController.refresh(list).forEach(e => {
        const text = optionTpl.supplant(e);
        insertAdjacent.beforeEnd(txtEstabelecimento, text);
      });
      return list;
    })
    .then(list => {
      const categs = Array.from(new Set(list.flatMap(e => e.Categoria)));
      categoriasController.refresh(categs);
      return list;
    });
});
txtEstabelecimento.addEventListener("change", function name(ev) {
  const estabelecimento = estabelecimentoController.get("id", this.value);
  const text = estabelecimentoSelecionadoTpl.supplant(estabelecimento);
  divDetalhes.innerHTML = text;
});