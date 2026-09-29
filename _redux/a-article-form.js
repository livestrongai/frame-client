import { createSlice } from '@reduxjs/toolkit'
import { stateInitial, stateTest, makeData, isValid } from './a-article-form-aux'

export const ArticleFormSlice = createSlice({
  name: 'articleForm',
  initialState: stateInitial,
  reducers: {
    clearArticleForm: () => stateInitial,
    testArticleForm: () => stateTest,
    setArticleForm: (_, action) => makeData(action.payload),
    updateArticleForm: (state, action) => {
      const [name, value, valid] = action.payload
      state[name] = { value, valid }
      state.valid = isValid(state)
    }
  }
})

export const { clearArticleForm, testArticleForm, setArticleForm, updateArticleForm } = ArticleFormSlice.actions
export const ArticleForm = ArticleFormSlice.reducer
