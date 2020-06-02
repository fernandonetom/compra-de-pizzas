# Sistema de compra de pizzas
> Simples sistema de pizzaria que mostra o catálogo e o usuário pode escolher qual pizza deseja e assim adicionar ao carrinho. Foi desenvolvido utilizando JavaScript.

### Atalhos:
- [Recursos](#recursos)
- [Dados API](#forma-dos-dados-da-api-em-json)
- [Demonstração](https://fernandonetom.github.io/compra-de-pizzas/)

### Recursos:
 - Exibição de pizzas de forma clara
 - Layout responsivo
 - Diferenciação de preço por tamanho de pizza, P, M ou G.
 - Calculo do carrinho automático
 - Salva os dados do carrinho mesmo ao abandonar a página
 - Pode ser usada com uma API externa
 
 ### Forma dos dados da API (em JSON):
```
[
	{
		"id": 1,
		"name": "Mussarela",
		"img": "images/pizza.png",
		"price": [18.9, 20.9, 22.9],
		"sizes": ["100g", "530g", "860g"],
		"description": "MOLHO DE TOMATE E MUSSARELA (2 CAMADAS)"
	},
	{
		"id": 2,
		"name": "Calabresa",
		"img": "images/pizza2.png",
		"price": [18.9, 20.9, 23.9],
		"sizes": ["320g", "530g", "860g"],
		"description": "MOLHO DE TOMATE, MUSSARELA E CALABRESA"
	}
]
```

