import { createSlice, nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns';
const initialState = [
  {
    id: '1',
    title: 'Learning redux toolkit',
    content: "I've heard good things",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: '2',
    title: 'Slices...',
    content: 'The more I say slice, the more I want pizza',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
      },

      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
            content,
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { userId, reaction } = action.payload;
      const exisitingPost = state.find((post) => post.id === userId);

      if (exisitingPost) {
        exisitingPost.reactions[reaction]++;
      }
    },
  },
});

export const selectAllPost = (state) => state.posts;

export const { addPost, reactionAdded } = postSlice.actions;

export default postSlice.reducer;
