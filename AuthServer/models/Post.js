const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("slug");
// const uniqueValidator = require("mongoose-unique-validator");
// const bcrypt = require("bcrypt");
const PostSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      trim: true
    },
    slug: {
      type: String,
      trim: true,
      lowercase: true
    },
    user: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ]
  },
  { timestamps: true }
);

PostSchema.pre("save", function(next) {
  this._slugify();
  next();
});

PostSchema.methods = {
  _slugify: function() {
    this.slug = slug(this.text);
  },
  toJSON() {
    return {
      _id: this._id,
      text: this.text,
      slug: this.slug,
      user: this.user
    };
  }
};

PostSchema.statics = {
  createPost(args, user) {
    return this.create({
      ...args,
      user
    });
  },
  list({ skip = 0, limit = 10 } = {}) {
    return this.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate("user");
  }
};

mongoose.model("Post", PostSchema);
