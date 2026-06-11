export type CounterDirection = 'up' | 'down'

export const useSetupCounter = (initialValue = 0) => {
  const count = ref(initialValue)
  const direction = ref<CounterDirection>('up')

  const label = computed(() => `${direction.value}:${count.value}`)

  const increment = () => {
    direction.value = 'up'
    count.value += 1
  }

  const decrement = () => {
    direction.value = 'down'
    count.value -= 1
  }

  return {
    count: readonly(count),
    label,
    increment,
    decrement
  }
}
