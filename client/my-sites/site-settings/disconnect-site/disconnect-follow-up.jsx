/** @format */
/**
 * External dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { localize } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import SelectDropdown from 'components/select-dropdown';
import { isFreeJetpackPlan, isPersonal } from 'lib/products-values';
import { isJetpackSite } from 'state/sites/selectors';
import { getSelectedSite, getSelectedSiteId, getSelectedSiteSlug } from 'state/ui/selectors';

class DisconnectFollowUp extends Component {
	state = {
		reasonSelected: 'default',
		compactButtons: false,
	};

	logReasonFollowUp = option => {
		this.setState( {
			reasonSelected: option.value,
		} );
	};

	setOptionsPaidPlan = () => {
		const { site } = this.props;

		let options = [];
		options = [
			{ value: 'default', label: 'Backups' },
			{ value: 'Antispam', label: 'Antispam' },
			{ value: 'Stats', label: 'Stats' },
			{ value: 'Publicize', label: 'Publicize' },
			{ value: 'Subscriptions', label: 'Subscriptions' },
			{ value: 'Other', label: 'Other' },
		];
		if ( ! isPersonal( site.plan ) ) {
			options.push( { value: 'Security Scanning', label: 'Security Scanning' } );
		}

		return options;
	};

	getFollowUpQuestion = optionValue => {
		const { site, translate } = this.props;

		let textShareWhat = '';

		switch ( optionValue ) {
			case 'tooHard':
				if ( isFreeJetpackPlan( site.plan ) ) {
					textShareWhat = translate(
						'Feel free to get in touch with our ' + 'Happiness Engineers should you need assistance'
					);
				} else {
					textShareWhat = translate( 'Which feature or service caused' + ' you problems?' );
				}
				break;

			case 'didNotInclude':
				textShareWhat = translate( 'Which feature where you looking for? ' );
				break;

			case 'onlyNeedFree':
				textShareWhat = translate( 'Would you like to downgrade your plan?' );
				break;
		}
		return textShareWhat;
	};

	renderFollowUp( optionValue ) {
		const { compactButtons, reasonSelected, site } = this.props;

		switch ( optionValue ) {
			case 'tooHard':
				if ( ! isFreeJetpackPlan( site.plan ) ) {
					const options = this.setOptionsPaidPlan( optionValue );
					return (
						<SelectDropdown
							compact={ compactButtons }
							onSelect={ this.logReasonFollowUp }
							options={ options }
							selectedText={ reasonSelected.value }
							initialSelected={ reasonSelected }
						/>
					);
				}
				if ( isFreeJetpackPlan( site.plan ) ) {
					return (
						<div>
							{' '}
							{ 'render link to HE' }{' '}
						</div>
					);
				}
			case 'didNotInclude':
				return (
					<div>
						{' '}
						{ 'didNotInclude open text' }{' '}
					</div>
				);
			case 'onlyNeedFree':
				return (
					<div>
						{' '}
						{ 'only need free' }{' '}
					</div>
				);
		}
	}

	render() {
		const { optionSelected } = this.props;

		return (
			<div>
				<div className="disconnect-site__question">
					{ this.getFollowUpQuestion( optionSelected ) }
				</div>

				<div className="disconnect-site__dropdown">
					{ this.renderFollowUp( optionSelected ) }
				</div>
			</div>
		);
	}
}

export default connect( state => ( {
	site: getSelectedSite( state ),
	siteIsJetpack: isJetpackSite( state, getSelectedSiteId( state ) ),
	siteSlug: getSelectedSiteSlug( state ),
} ) )( localize( DisconnectFollowUp ) );
