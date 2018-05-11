var PropertyStore = {
  debug: true,
  state: {
    property: {
      type: "1",
      name: "",
      response: "none"
    },
    personalData: {
      name: '',
      card: '',
      address: ''
    }
  },
  validate() {
    this.debug &&
      console.log(
        "setMessageAction triggered with",
        this.state.property.name
      );

    console.log(this.state.property.name.length);
    if (this.state.property.name.length < 1) {
      throw new Error("1文字以上入力してください");
    }
    return true;
  }
};
export default PropertyStore;
