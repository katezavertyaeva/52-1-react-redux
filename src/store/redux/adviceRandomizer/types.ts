export interface AdviceRandomizerSliceState {
  data: string[],
  error?: string,
  status: 'default' | 'loading' | 'success' | 'error'
}