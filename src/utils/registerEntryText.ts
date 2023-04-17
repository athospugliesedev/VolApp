const sessions = [
  {
    id: 1,
    title: 'Insira alguns dados básicos',
    textEntry: [
      {
        id: 1,
        label: 'Nome',
        placeholder: 'Digite seu nome completo'
      },
      {
        id: 2,
        label: 'E-mail',
        placeholder: 'Insira seu endereço de e-mail'
      },
      {
        id: 3,
        label: 'Crie uma senha',
        placeholder: 'Insira sua senha'
      },
      {
        id: 4,
        label: 'Repita a senha',
        placeholder: 'Insira sua senha novamente'
      },
    ],
    checkbox: [],
  },
  {
    id: 2,
    title: 'Agora, mais alguns dados sobre você',
    textEntry: [
      {
        id: 1,
        label: 'CEP',
        placeholder: 'Digite seu CEP'
      },
      {
        id: 2,
        label: 'Endereço',
        placeholder: 'Insira seu endereço',
      },
      {
        id: 3,
        label: 'Número',
        placeholder: 'Insira o complemento'
      },
      {
        id: 4,
        label: 'Telefone',
        placeholder: '(00) 00000-0000'
      }
    ],
    checkbox: [],
  },
  {
    id: 3,
    title: 'Para finalizar, qual seu plano de saúde?',
    textEntry: [],
    checkbox: [
        {
            id: 1,
            value: 'Sulamérica'
        },
        {
            id: 2,
            value: 'Unimed'
        },
        {
          id: 3,
          value: 'Bradesco',
        },
        {
          id: 4,
          value: 'Amil'
        },
        {
          id: 5,
          value: 'Biosaúde'
        },
        {
          id: 6,
          value: 'Hapvida'
        }
    ]
}
]

export { sessions }