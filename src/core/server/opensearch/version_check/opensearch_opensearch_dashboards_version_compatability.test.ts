/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/*
 * Modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

import { opensearchVersionCompatibleWithOpenSearchDashboards } from './opensearch_opensearch_dashboards_version_compatability';

describe('plugins/opensearch', () => {
  describe('lib/is_opensearch_compatible_with_opensearch_dashboards', () => {
    describe('returns false', () => {
      it('when OpenSearch major is greater than OpenSearch Dashboards major', () => {
        expect(opensearchVersionCompatibleWithOpenSearchDashboards('1.0.0', '0.0.0')).toBe(false);
      });

      it('when OpenSearch major is less than OpenSearch Dashboards major', () => {
        expect(opensearchVersionCompatibleWithOpenSearchDashboards('0.0.0', '1.0.0')).toBe(false);
      });

      it('when majors are equal, but OpenSearch minor is less than OpenSearch Dashboards minor', () => {
        expect(opensearchVersionCompatibleWithOpenSearchDashboards('1.0.0', '1.1.0')).toBe(false);
      });
    });

    describe('returns true', () => {
      it('when version numbers are the same', () => {
        expect(opensearchVersionCompatibleWithOpenSearchDashboards('1.1.1', '1.1.1')).toBe(true);
      });

      it('when majors are equal, and OpenSearch minor is greater than OpenSearch Dashboards minor', () => {
        expect(opensearchVersionCompatibleWithOpenSearchDashboards('1.1.0', '1.0.0')).toBe(true);
      });

      it('when majors and minors are equal, and OpenSearch patch is greater than OpenSearch Dashboards patch', () => {
        expect(opensearchVersionCompatibleWithOpenSearchDashboards('1.1.1', '1.1.0')).toBe(true);
      });

      it('when majors and minors are equal, but OpenSearch patch is less than OpenSearch Dashboards patch', () => {
        expect(opensearchVersionCompatibleWithOpenSearchDashboards('1.1.0', '1.1.1')).toBe(true);
      });
    });
  });
});
