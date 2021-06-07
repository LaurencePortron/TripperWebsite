import React from 'react';
import './TripperFeatures.css';
import {
  FeatureNotImplemented,
  FeatureImplemented,
  UpcomingFeature,
} from '../images/svg';

export default function TripperFeatures(props) {
  return (
    <div className='table-container'>
      <section className='table-headers'>
        <h1>Implemented & upcoming features</h1>
        <p>Any feature suggestions? Feel free to reach out!</p>
      </section>
      <section>
        <div className='container'>
          <div className='table-wrapper'>
            <table>
              <thead>
                <tr>
                  <th>
                    <div className='table-title'>Beta Version</div>
                  </th>
                  <th>
                    <div className='heading'>Implemented</div>
                    <div className='info'>
                      <div className='amount'>
                        free <span>now</span>
                      </div>
                      <div className='billing-msg'>billed annually</div>
                      <button className='table-button' type='button'>
                        Get started
                      </button>
                    </div>
                  </th>
                  <th>
                    <div className='heading'>Upcoming</div>
                    <div className='info'>
                      {/* <div className='popular'>Popular</div> */}
                      <div className='amount'>
                        free <span>soon</span>
                      </div>
                      <div className='billing-msg'>billed annually</div>
                      <button type='button'>Get started</button>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='td-header'>Trips</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Create Trips</td>
                  <FeatureImplemented />
                  <td></td>
                </tr>
                <tr>
                  <td>Modify Trips</td>
                  <FeatureNotImplemented />
                  <UpcomingFeature />
                </tr>
                <tr>
                  <td>Archive Trips</td>
                  <FeatureImplemented />
                  <td></td>
                </tr>
                <tr>
                  <td className='td-header'>Activities</td>
                  <td>
                    <hr />
                  </td>
                  <td>
                    <hr />
                  </td>
                </tr>
                <tr>
                  <td>Create Activities</td>
                  <FeatureImplemented />
                  <td></td>
                </tr>
                <tr>
                  <td>Modify Activities</td>
                  <FeatureNotImplemented />
                  <UpcomingFeature />
                </tr>
                <tr>
                  <td>Archive Activities</td>
                  <FeatureImplemented />
                  <td></td>
                </tr>
                <tr>
                  <td className='td-header'>Friends</td>
                  <td>
                    <hr />
                  </td>
                  <td>
                    <hr />
                  </td>
                </tr>
                <tr>
                  <td>Invite Friends</td>
                  <FeatureImplemented />
                  <td></td>
                </tr>
                <tr>
                  <td>Remove Friend(s)</td>
                  <FeatureNotImplemented />
                  <UpcomingFeature />
                </tr>
                <tr>
                  <td className='td-header'>Expenses</td>
                  <td>
                    <hr />
                  </td>
                  <td>
                    <hr />
                  </td>
                </tr>
                <tr>
                  <td>Expense Overview</td>
                  <FeatureImplemented />
                  <td></td>
                </tr>
                <tr>
                  <td>Add Expense</td>
                  <FeatureNotImplemented />
                  <UpcomingFeature />
                </tr>
                <tr>
                  <td>Settle expense(s)</td>
                  <FeatureImplemented />
                  <td></td>
                </tr>
                <tr>
                  <td className='td-header'>Stops(Accomodation)</td>
                  <td>
                    <hr />
                  </td>
                  <td>
                    <hr />
                  </td>
                </tr>
                <tr>
                  <td>Add Stop(s)</td>
                  <FeatureNotImplemented />
                  <UpcomingFeature />
                </tr>
                <tr>
                  <td>Modify/Remove stop</td>
                  <FeatureNotImplemented />
                  <UpcomingFeature />
                </tr>
                <tr>
                  <td>Show itinerary</td>
                  <FeatureNotImplemented />
                  <UpcomingFeature />
                </tr>
                <tr>
                  <td className='td-header'>Messages</td>
                  <td>
                    <hr />
                  </td>
                  <td>
                    <hr />
                  </td>
                </tr>
                <tr>
                  <td>Post inApp message</td>
                  <FeatureNotImplemented />
                  <UpcomingFeature />
                </tr>
                <tr>
                  <td>Reply to inApp Messages</td>
                  <FeatureNotImplemented />
                  <UpcomingFeature />
                </tr>
                <tr>
                  <td>Tag friends in messages</td>
                  <FeatureNotImplemented />
                  <UpcomingFeature />
                </tr>
                <tr>
                  <td className='td-header'>Albums</td>
                  <td>
                    <hr />
                  </td>
                  <td>
                    <hr />
                  </td>
                </tr>
                <tr>
                  <td>Upload photos</td>
                  <FeatureNotImplemented />
                  <UpcomingFeature />
                </tr>
                <tr>
                  <td>Create Albums</td>
                  <FeatureNotImplemented />
                  <UpcomingFeature />
                </tr>
                <tr>
                  <td className='td-header'>Settings</td>
                  <td>
                    <hr />
                  </td>
                  <td>
                    <hr />
                  </td>
                </tr>
                <tr>
                  <td>Notification Alerts (inApp)</td>
                  <FeatureNotImplemented />
                  <UpcomingFeature />
                </tr>
                <tr>
                  <td>Manage Notifications</td>
                  <FeatureNotImplemented />
                  <UpcomingFeature />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
