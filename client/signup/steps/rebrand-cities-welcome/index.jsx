/**
 * External dependencies
 */
import React, { Component } from 'react';
import { localize } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import StepWrapper from 'signup/step-wrapper';
import SignupActions from 'lib/signup/actions';
import generateUniqueSiteUrl from './generate-unique-site-url';

class RebrandCitiesWelcomeStep extends Component {
	handleSubmit = ( event ) => {
		event.preventDefault();

		const {
			goToNextStep,
			stepName,
			stepSectionName,
			translate,
		} = this.props;

		const siteUrl = generateUniqueSiteUrl( 'site' );

		SignupActions.submitSignupStep(
			{
				isPurchasingItem: false,
				processingMessage: translate( 'Setting up your site' ),
				stepName,
				stepSectionName,
				siteUrl,
			}
		);

		goToNextStep();
	}

	renderContent() {
		const { translate } = this.props;
		const buttonClass = 'button is-primary';
		return (
			<div className="rebrand-cities-welcome__content">
				<button className={ buttonClass } onClick={ this.handleSubmit }>
					{ translate( 'Create your account' ) }
				</button>
			</div>
		);
	}

	render() {
		const {
			flowName,
			positionInFlow,
			signupProgress,
			stepName,
			translate,
		} = this.props;

		return (
			<StepWrapper
				flowName={ flowName }
				stepName={ stepName }
				positionInFlow={ positionInFlow }
				headerText={ translate( 'Welcome to WordPress.com' ) }
				subHeaderText={ translate( 'We\'ve partnered with Rebrand Cities to get businesses online. Get started today.' ) }
				signupProgress={ signupProgress }
				stepContent={ this.renderContent() } />
		);
	}
}

export default localize( RebrandCitiesWelcomeStep );