import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'
import { RootState } from './store'

export type Contact = {
  id: string
  name: string
  email: string
  phone: string
  category: string
}

type ContactsState = {
  list: Contact[]
  filter: string
}

const initialState: ContactsState = {
  list: [],
  filter: 'All'
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.list.push(action.payload)
    },
    removeContact: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((contact) => contact.id !== action.payload)
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const index = state.list.findIndex((c) => c.id === action.payload.id)
      if (index !== -1) {
        state.list[index] = action.payload
      }
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload
    }
  }
})

// SELECTORS
export const selectContacts = (state: RootState) => state.contacts.list
export const selectFilter = (state: RootState) => state.contacts.filter

export const selectTagCounts = createSelector(
  (state: RootState) => state.contacts.list,
  (contacts) => {
    const counts: Record<string, number> = {}
    contacts.forEach((contact) => {
      const tag = contact.category || 'Sem categoria'
      counts[tag] = (counts[tag] || 0) + 1
    })
    return counts
  }
)

export const { addContact, removeContact, editContact, setFilter } =
  contactsSlice.actions

export default contactsSlice.reducer
