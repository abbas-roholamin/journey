const mongoose = require('mongoose');
const slugify = require('slugify');

const tourSchema = new mongoose.Schema(
    {
        slug: {
            type: String,
        },
        name: {
            type: String,
            required: [true, 'A tour must have a name'],
            unique: true,
            trim: true,
            minLength: [10, 'A tour name must have more or equal than 10 characters'],
        },
        duration: {
            type: Number,
            required: [true, 'A tour must have a duration'],
        },
        maxGroupSize: {
            type: Number,
            required: [true, 'A tour must have a group size'],
        },
        ratingsAverage: {
            type: Number,
            default: 4.5,
            min: [1, 'Rating must be above 1.0'],
            max: [5, 'Rating must be below 5.0'],
        },
        ratingsQuantity: {
            type: Number,
            default: 0,
        },
        difficulty: {
            type: String,
            required: [true, 'A tour must have a difficulty'],
            enum: {
                values: ['easy', 'medium', 'difficult'],
                message: 'Difficulty is either: easy, medium, difficult',
            },
        },
        price: {
            type: Number,
            required: [true, 'A tour must have a price'],
        },
        discount: {
            type: Number,
            validate: {
                validator: function (val) {
                    // this only points to current doc on NEW document creation
                    return val < this.price;
                },
                message: 'Discount price ({VALUE}) should be below regular price',
            },
        },
        summary: {
            type: String,
            trim: true,
            required: [true, 'A tour must have a description'],
        },
        description: {
            type: String,
            trim: true,
            required: [true, 'A tour must have a description'],
        },
        imageCover: {
            type: String,
            required: [true, 'A tour must have a cover image'],
        },
        images: [String],
        createdAt: {
            type: Date,
            default: Date.now(),
            select: false,
        },
        startDates: [Date],
        secretTour: {
            type: Boolean,
            default: false,
        },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    },
);

tourSchema.virtual('durationWeeks').get(function () {
    return Math.round(this.duration / 7);
});

// Midleware
tourSchema.pre('save', function (next) {
    this.slug = slugify(this.name, { lower: true });
    next();
});

// tourSchema.post('save', function (doc, next) {
//     console.log(doc);
//     next();
// });

// Query middlewire
tourSchema.pre(/^find/, function (next) {
    this.find({ secretTour: { $ne: false } });
    next();
});

// tourSchema.post(/^find/, function (docs, next) {
//     console.log(docs);
//     next();
// });

// Aggregation mioddlewire
tourSchema.pre('aggregate', function (next) {
    this.pipeline().unshift({ $match: { secretTour: { $ne: false } } });
    next();
});

module.exports = mongoose.model('Tour', tourSchema);
