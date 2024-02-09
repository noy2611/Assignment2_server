// Description: This file contains the schema for the evacuation plan model.
const { Schema, model } = require('mongoose');

const evacuationPlanSchema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  location: { type: String },
  details: { type: String }
}, { collection: 'coll-express',versionKey: false });

module.exports = model('EvacuationPlan', evacuationPlanSchema);
