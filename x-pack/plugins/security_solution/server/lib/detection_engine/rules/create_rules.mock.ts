/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { CreateRulesOptions } from './types';
import { alertsClientMock } from '../../../../../alerts/server/mocks';

export const getCreateRulesOptionsMock = (): CreateRulesOptions => ({
  alertsClient: alertsClientMock.create(),
  anomalyThreshold: undefined,
  description: 'some description',
  enabled: true,
  falsePositives: ['false positive 1', 'false positive 2'],
  from: 'now-6m',
  query: 'user.name: root or user.name: admin',
  language: 'kuery',
  savedId: 'savedId-123',
  timelineId: 'timelineid-123',
  timelineTitle: 'timeline-title-123',
  meta: {},
  machineLearningJobId: undefined,
  filters: [],
  ruleId: 'rule-1',
  immutable: false,
  index: ['index-123'],
  interval: '5m',
  maxSignals: 100,
  riskScore: 80,
  outputIndex: 'output-1',
  name: 'Query with a rule id',
  severity: 'high',
  tags: [],
  threat: [],
  to: 'now',
  type: 'query',
  references: ['http://www.example.com'],
  note: '# sample markdown',
  version: 1,
  exceptionsList: [],
  actions: [],
});

export const getCreateMlRulesOptionsMock = (): CreateRulesOptions => ({
  alertsClient: alertsClientMock.create(),
  anomalyThreshold: 55,
  description: 'some description',
  enabled: true,
  falsePositives: ['false positive 1', 'false positive 2'],
  from: 'now-6m',
  query: undefined,
  language: undefined,
  savedId: 'savedId-123',
  timelineId: 'timelineid-123',
  timelineTitle: 'timeline-title-123',
  meta: {},
  machineLearningJobId: 'new_job_id',
  filters: [],
  ruleId: 'rule-1',
  immutable: false,
  index: ['index-123'],
  interval: '5m',
  maxSignals: 100,
  riskScore: 80,
  outputIndex: 'output-1',
  name: 'Machine Learning Job',
  severity: 'high',
  tags: [],
  threat: [],
  to: 'now',
  type: 'machine_learning',
  references: ['http://www.example.com'],
  note: '# sample markdown',
  version: 1,
  exceptionsList: [],
  actions: [],
});