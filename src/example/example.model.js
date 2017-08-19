export default {
  namespace: 'example',
  state: {
    items: [{
      id: 1,
      title: 'item one'
    }, {
      id: 2,
      title: 'item two'
    }]
  },
  reducers: {
    send: function (state, { payload: item }) {
      state.items.push({
        id: state.items.length + 1,
        title: item.title
      });
      return { ...state};
    }
  },
  effects: {},
  subscriptions: {}
};