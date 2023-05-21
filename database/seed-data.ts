interface Entry {
  description: string
  status: 'pending' | 'in-progress' | 'completed'
  createdAt: number
}

interface SeededData {
  entries: Entry[]
}

export const seedData: SeededData = {
  entries: [
    {
      description:
        'Mollit nostrud irure exercitation ad est voluptate nulla reprehenderit amet ipsum et ut duis ipsum.',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      description:
        'Dolor veniam fugiat proident nostrud exercitation consequat pariatur ea Lorem incididunt qui.',
      status: 'in-progress',
      createdAt: Date.now() - 100000,
    },
    {
      description:
        'Incididunt fugiat consequat cupidatat mollit ex exercitation veniam eu tempor laboris.',
      status: 'completed',
      createdAt: Date.now() - 1000000,
    },
  ],
}
