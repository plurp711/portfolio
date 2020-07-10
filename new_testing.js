var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// SKILLS

var skills = ['Swift', 'Xcode', 'JavaScript', 'Python', 'HTML', 'CSS', 'AJAX', 'PHP', 'Java', 'MySql', 'jQuery', 'React', 'Bootstrap', 'Node.js', 'Express', 'npm', 'Socket.IO', 'Firebase', 'Highcharts', 'pandas', 'Yelp Fusion API', 'Google Sheets API', 'YouTube Player API'];

// EXPERIENCES

var experiences = [];

// TEEN CHALLENGE

experiences.push({
	'position': '\n\tSoftware Engineer\n\t',
	'place': '\n\tTeen Challenge NWCN (non-profit)\n\t',
	'description': '\n\tI work as the sole software engineer in our Santa Clara development office. I created a Python application for donor/business calls, an HTML webpage for student fundraising data, a PHP website for student financial records, and another site to act as a forum for student questions.\n\t',
	'image_url': '\n\tteen_challenge.jpg\n\t',
	'timeframe': '\n\tFebruary 2019 - Current\n\t'
});

// KYLEE KO

experiences.push({
	'position': '\n\tFreelance iOS Developer\n\t',
	'place': '\n\tKylee Ko Foundation, Inc. (non-profit)\n\t',
	'description': '\n\tWorked in communcation with the CEO and founder of Kylee Ko on creating and releasing an iOS Application to better show off his non-profit, as well as educate others on its purpose and value in the community.\n\t',
	'image_url': '\n\tkylee_ko.jpg\n\t',
	'timeframe': '\n\tNovember 2019 - May 2020\n\t'
});

// SELF EMPLOYED

experiences.push({
	'position': '\n\tMobile iOS Developer\n\t',
	'place': '\n\tSelf-Employed\n\t',
	'description': '\n\tPublished a total of eight iOS applications for both iPhone and iPad on the App Store. All of these were written in Swift programmatically (without storyboards), and released under my name.\n\t',
	'image_url': '\n\tapple.png\n\t',
	'timeframe': '\n\tDecember 2017 - February 2019\n\t'
});

// PROJECTS

var projects = [];

// YOUTUBE WATCH PARTY

projects.push({
	'title': '\n\tYouTube Watch Party\n\t',
	'subtitle': '\n\tNode.js/Socket.IO Web App\n\t',
	'description': '\n\tCreate a room and invite friends via a unique link to add YouTube videos to a shared video queue. All videos that are played then sync within one second of each other across all instances. Users are also able to chat with one another while syncing control of the video player for all those currently in the room.\n\t',
	'image_url': '\n\tyoutube_watch_party.gif\n\t',
	'timeframe': '\n\t2020\n\t'
});

// FUNDRAISING DATA

projects.push({
	'title': '\n\tStudent Fundraising Data\n\t',
	'subtitle': '\n\tHTML/JavaScript Webpage\n\t',
	'description': '\n\tPulls information from daily filled out Fundraising Reports on Google Sheets, and displays the data accessibly using Highcharts. Shows averages and totals by city, students, over time, and by specific map ids. This allows users decide which days to go to which city on which map, and send the right people to maximize the funds raised.\n\t',
	'image_url': '\n\tfundraising_info.gif\n\t',
	'timeframe': '\n\t2020\n\t',
	'skills': ['HTML', 'CSS', 'Javascript', 'Highcharts']
});

// REAL TIME CHAT

projects.push({
	'title': '\n\tReal Time Chat\n\t',
	'subtitle': '\n\tFirebase/React Web App\n\t',
	'description': '\n\tCreate chatrooms with one another by searching for users by name or email. New users are registered through Google\'s Firebase Authentication via their email. Text messages as well as images amd emojis can all be sent and recieved. Each chat name as well as the overall theme for each chat room can be changed and is updated in real time for all users as well.\n\t',
	'image_url': '\n\tchatter.gif\n\t',
	'timeframe': '\n\t2020\n\t'
});

// STUDENT FINANCIALS

projects.push({
	'title': '\n\tStudent Financial Records\n\t',
	'subtitle': '\n\tPHP/MySql Website\n\t',
	'description': '\n\tKeeps track of all financial records for individual student accounts. Lets users input transaction additions/edits/deletions for checks, cash, or giftcards that remain pending until said student enters their confidential PIN number to confirm the transaction. The overall admin has the power to add/edit/remove centers, users, students, and transactions.\n\t',
	'image_url': '\n\tstudent_financials.gif\n\t',
	'timeframe': '\n\t2020\n\t',
	'skills': ['MySql', 'PHP', 'HTML', 'CSS', 'Javascript']
});

// BOXES

projects.push({
	'title': '\n\tBoxes\n\t',
	'subtitle': '\n\tiPhone and iPad iOS Application\n\t',
	'description': '\n\tSimple high-score based arcade game with over 150 different stages. The object of the game is to navigate mazes to the goal without touching any obstacles, and to do so within the given time limit.\n\t',
	'image_url': '\n\tboxes.gif\n\t',
	'timeframe': '\n\t2018\n\t',
	'skills': ['Swift', 'Xcode']
});

// CALL PROGRAM

projects.push({
	'title': '\n\tBusiness/Donor Call Program\n\t',
	'subtitle': '\n\tPython Application\n\t',
	'description': '\n\tCalling program with a user and admin side for making calls to donors or businesses for donations. The admin can create call lists that pulls business information from Yelp with specific criteria, and assigns those lists to users. The user then makes calls that are fed to them in order of most likely to donate based on any previous communication we may have had with them.\n\t',
	'image_url': '\n\tcall_program.png\n\t',
	'timeframe': '\n\t2020\n\t',
	'skills': ['Python', 'Tkinter']
});

// SPEED

projects.push({
	'title': '\n\tSpeed Card Game Online\n\t',
	'subtitle': '\n\tiPhone and iPad iOS Application\n\t',
	'description': '\n\tAllows users to play the popular card game \'speed\' either with an opponent online or against the computer. Used Google\'s Firebase Realtime Database to match opponents and keep track of games in real time.\n\t',
	'image_url': '\n\tspeed.gif\n\t',
	'timeframe': '\n\t2018\n\t',
	'skills': ['Swift', 'Xcode', 'Firebase']
});

// KYLEE KO

projects.push({
	'title': '\n\tKylee Ko Foundation\n\t',
	'subtitle': '\n\tiPhone and iPad iOS Application\n\t',
	'description': '\n\tEducates users on the purpose of the non-profit Kylee Ko. Also shows the current status of past, current, and future projects, as well as accepts donations to the Foundation. A map is displayed in addition, to show the location as well as provide information about all open transitional housing units nearby.\n\t',
	'image_url': '\n\tkylee_ko.png\n\t',
	'timeframe': '\n\t2019\n\t',
	'skills': ['Swift', 'Xcode']
});

// QUESTIONS

projects.push({
	'title': '\n\tStudent Questions Forum\n\t',
	'subtitle': '\n\tPHP/MySql Website\n\t',
	'description': '\n\tLets student users enter questions and upvote their favorites before a presentation is held at their school. This lets the presenters know questions that the students have before they present. The admin can login and manage questions, as well as add schools and share the unique school code with teachers to give to their students.\n\t',
	'image_url': '\n\tquestions.gif\n\t',
	'timeframe': '\n\t2020\n\t',
	'skills': ['MySql', 'PHP', 'HTML', 'CSS', 'Javascript', 'AJAX']
});

// QUICK BRICK

projects.push({
	'title': '\n\tQuick Brick\n\t',
	'subtitle': '\n\tiPhone and iPad iOS Application\n\t',
	'description': '\n\tGame that sees players solving placement puzzles by aligning 3 or more blocks in a row in order to clear the board. Earn medals on 100 individual stages by solving each puzzle in the fastest possible time, or compete for the highscore in endless mode.\n\t',
	'image_url': '\n\tquick_brick_start.gif\n\t',
	'timeframe': '\n\t2018\n\t',
	'skills': ['Swift', 'Xcode']
});

// CASTLEVANIA REDUX

projects.push({
	'title': '\n\tCastlevania Redux\n\t',
	'subtitle': '\n\tJava Applet\n\t',
	'description': '\n\tGame based on the classic \'Castlevania\' NES video game series. Features original art, three special weapons, six unique enemies, powerups, as well as a level creator for easily making new stages.\n\t',
	'image_url': '\n\tcastlevania.gif\n\t',
	'timeframe': '\n\t2016\n\t',
	'skills': ['Java']
});

// BRICKS

// projects.push({
// 	'title':
// 	`
// 	Bricks
// 	`,
// 	'subtitle':
// 	`
// 	iPhone and iPad iOS Application
// 	`,
// 	'description':
// 	`
// 	SOMETHING HERE
// 	`,
// 	'image_url':
// 	`
// 	bricks.gif
// 	`,
// 	'timeframe':
// 	`
// 	2018
// 	`,
// 	'skills':
// 	[
// 	'Swift',
// 	'Xcode'
// 	]
// });

// LIGHTS OUT

// projects.push({
// 	'title':
// 	`
// 	Lights Out
// 	`,
// 	'subtitle':
// 	`
// 	iPhone and iPad iOS Application
// 	`,
// 	'description':
// 	`
// 	SOMETHING HERE
// 	`,
// 	'image_url':
// 	`
// 	lights_out.gif
// 	`,
// 	'timeframe':
// 	`
// 	2018
// 	`,
// 	'skills':
// 	[
// 	'Swift',
// 	'Xcode'
// 	]
// });

// BALL CATCH

// projects.push({
// 	'title':
// 	`
// 	Ball Catch
// 	`,
// 	'subtitle':
// 	`
// 	iPhone and iPad iOS Application
// 	`,
// 	'description':
// 	`
// 	SOMETHING HERE
// 	`,
// 	'image_url':
// 	`
// 	ball_catch.gif
// 	`,
// 	'timeframe':
// 	`
// 	2018
// 	`,
// 	'skills':
// 	[
// 	'Swift',
// 	'Xcode'
// 	]
// });

// DOWNBEAT

// projects.push({
// 	'title':
// 	`
// 	Downbeat
// 	`,
// 	'subtitle':
// 	`
// 	iPhone and iPad iOS Application
// 	`,
// 	'description':
// 	`
// 	Original game based the classic 'Mega Man' game series. Complete with ten unique stages, weapons, and bosses, all with original art. There are also over 20 different enemies, as well as sound effects and special tracks for each stage.
// 	`,
// 	'image_url':
// 	`
// 	downbeat.gif
// 	`,
// 	'timeframe':
// 	`
// 	2019
// 	`,
// 	'skills':
// 	[
// 	'Swift',
// 	'Xcode'
// 	]
// });

// const colors = [
// 	'rgb(255, 180, 180)',
// 	'rgb(180, 255, 180)',
// 	'rgb(180, 180, 255)'
// ];

var colors = ['#ffb4b4', '#ffdbb4', '#ffffb4', '#b4ffb5', '#b4fff6', '#b4b4ff', '#c6b4ff', '#e6b4ff', '#ffb4e2'];

// function getColorFromIndex(index) {
// 	const pos = index % colors.length;
// 	return colors[pos];
// }

function getColorFromIndex(index) {
	return "rgb(80, 80, 80)";
}

// function getColorFromIndex(index) {
// 	let pos = 0;
// 	switch (index) {
// 		case 0:
// 			pos = 3;
// 			break;
// 		case 1:
// 			pos = 4;
// 			break;
// 		case 2:
// 			pos = 5;
// 			break;
// 	}
// 	return colors[pos];
// }

var ProjectInfoDiv = function (_React$Component) {
	_inherits(ProjectInfoDiv, _React$Component);

	function ProjectInfoDiv(props) {
		_classCallCheck(this, ProjectInfoDiv);

		var _this = _possibleConstructorReturn(this, (ProjectInfoDiv.__proto__ || Object.getPrototypeOf(ProjectInfoDiv)).call(this, props));

		_this.getInfoDiv = _this.getInfoDiv.bind(_this);
		return _this;
	}

	_createClass(ProjectInfoDiv, [{
		key: 'getInfoDiv',
		value: function getInfoDiv(project, infoType) {

			if (infoType == 'project') {

				return React.createElement(
					'div',
					{ className: 'info-div' },
					React.createElement(
						'label',
						{ className: 'title-label' },
						project.title
					),
					React.createElement(
						'label',
						{ className: 'subtitle-label' },
						project.subtitle
					),
					React.createElement(
						'label',
						{ className: 'description-label' },
						project.description
					),
					React.createElement(
						'label',
						{ className: 'timeframe-label' },
						project.timeframe
					)
				);
			} else if (infoType == 'experience') {

				return React.createElement(
					'div',
					{ className: 'info-div' },
					React.createElement(
						'label',
						{ className: 'title-label' },
						project.position
					),
					React.createElement(
						'label',
						{ className: 'subtitle-label' },
						project.place
					),
					React.createElement(
						'label',
						{ className: 'description-label' },
						project.description
					),
					React.createElement(
						'label',
						{ className: 'timeframe-label' },
						project.timeframe
					)
				);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var project = this.props.project;
			var infoType = this.props.infoType;
			return this.getInfoDiv(project, infoType);
		}
	}]);

	return ProjectInfoDiv;
}(React.Component);

// <img className='gif-class' alt='something' id='myImg' src={this.props.image_url}></img>

var GifDiv = function (_React$Component2) {
	_inherits(GifDiv, _React$Component2);

	function GifDiv() {
		_classCallCheck(this, GifDiv);

		return _possibleConstructorReturn(this, (GifDiv.__proto__ || Object.getPrototypeOf(GifDiv)).apply(this, arguments));
	}

	_createClass(GifDiv, [{
		key: 'render',
		value: function render() {

			var isMobile = this.props.isMobile;

			var largeDivClassText = 'large-gif-div';
			var divClassText = 'gif-div';
			var classText = 'gif-class';
			if (isMobile) {
				largeDivClassText += '-mobile';
				divClassText += '-mobile';
				classText += '-mobile';
			}

			return React.createElement(
				'div',
				{ className: largeDivClassText },
				React.createElement(
					'div',
					{ className: divClassText },
					React.createElement('img', { className: classText, src: this.props.image_url })
				)
			);
		}
	}]);

	return GifDiv;
}(React.Component);

var ProjectDiv = function (_React$Component3) {
	_inherits(ProjectDiv, _React$Component3);

	function ProjectDiv() {
		_classCallCheck(this, ProjectDiv);

		return _possibleConstructorReturn(this, (ProjectDiv.__proto__ || Object.getPrototypeOf(ProjectDiv)).apply(this, arguments));
	}

	_createClass(ProjectDiv, [{
		key: 'render',
		value: function render() {
			var project = this.props.project;
			var index = this.props.index;
			var infoType = this.props.infoType;
			var isMobile = this.props.isMobile;

			if (isMobile) {
				return React.createElement(
					'div',
					{ className: 'project-div-mobile', id: index + "-project-div", style: { borderColor: getColorFromIndex(index) } },
					React.createElement(GifDiv, { image_url: project.image_url, infoType: infoType, isMobile: isMobile }),
					React.createElement(ProjectInfoDiv, { project: project, infoType: infoType })
				);
			}

			return React.createElement(
				'div',
				{ className: 'project-div', id: index + "-project-div", style: { borderColor: getColorFromIndex(index) } },
				React.createElement(ProjectInfoDiv, { project: project, infoType: infoType }),
				React.createElement(GifDiv, { image_url: project.image_url, infoType: infoType, isMobile: isMobile })
			);
		}
	}]);

	return ProjectDiv;
}(React.Component);

var ProjectLabelsDiv = function (_React$Component4) {
	_inherits(ProjectLabelsDiv, _React$Component4);

	function ProjectLabelsDiv() {
		_classCallCheck(this, ProjectLabelsDiv);

		return _possibleConstructorReturn(this, (ProjectLabelsDiv.__proto__ || Object.getPrototypeOf(ProjectLabelsDiv)).apply(this, arguments));
	}

	_createClass(ProjectLabelsDiv, [{
		key: 'render',
		value: function render() {
			var project = this.props.project;
			var index = this.props.index;
			return React.createElement(
				'div',
				{ className: 'right-project-div' },
				React.createElement(
					'div',
					{ className: 'side-labels-div', id: index + "-side-labels-div", style: { borderColor: getColorFromIndex(index) } },
					React.createElement(
						'label',
						{ className: 'side-project-label' },
						project.title
					),
					React.createElement(
						'label',
						{ className: 'side-project-label-bottom' },
						project.subtitle
					)
				)
			);
		}
	}]);

	return ProjectLabelsDiv;
}(React.Component);

// class ModalDiv extends React.Component {
//   render() {
//     return (
// 		<div id="myModal" className="modal">
// 			<span className="close">&times;</span>
// 			<img className="modal-content" id="img01"></img>
// 			<div id="caption"></div>
// 		</div>
//     );
//   }
// }

var ProjectsDisplayDiv = function (_React$Component5) {
	_inherits(ProjectsDisplayDiv, _React$Component5);

	function ProjectsDisplayDiv(props) {
		_classCallCheck(this, ProjectsDisplayDiv);

		var _this5 = _possibleConstructorReturn(this, (ProjectsDisplayDiv.__proto__ || Object.getPrototypeOf(ProjectsDisplayDiv)).call(this, props));

		_this5.getProjectsList = _this5.getProjectsList.bind(_this5);
		return _this5;
	}

	_createClass(ProjectsDisplayDiv, [{
		key: 'getProjectsList',
		value: function getProjectsList(projects, infoType, isMobile) {

			var galleryCellText = "gallery-cell";
			var largeProjectDivClassText = "large-project-div";
			if (isMobile) {
				galleryCellText += '-mobile';
				largeProjectDivClassText += '-mobile';
			}

			var listItems = projects.map(function (project, index) {
				return React.createElement(
					'div',
					{ className: galleryCellText, key: index },
					React.createElement(
						'div',
						{ className: largeProjectDivClassText },
						React.createElement(ProjectDiv, { project: project, index: index, infoType: infoType, isMobile: isMobile }),
						React.createElement(ProjectLabelsDiv, { project: project, index: index })
					)
				);
			});

			return listItems;
		}
	}, {
		key: 'render',
		value: function render() {
			var projects = this.props.projects;
			var infoType = this.props.infoType;
			var isMobile = this.props.isMobile;
			var listItems = this.getProjectsList(projects, infoType, isMobile);

			var classNameText = "fade gallery-div";
			if (isMobile) {
				classNameText += "-mobile";
			}

			return React.createElement(
				'div',
				{ className: classNameText },
				React.createElement(
					'div',
					{
						className: 'main-gallery js-flickity',
						'data-flickity-options': '{ "cellAlign": "center", "contain": true, "wrapAround": true, "freeScroll": false, "percentPosition": false, "autoPlay": false, "groupCells": false }' },
					listItems
				)
			);
		}
	}]);

	return ProjectsDisplayDiv;
}(React.Component);

// "autoPlay": true,
// "groupCells": "90%"

var SkillsDisplayDiv = function (_React$Component6) {
	_inherits(SkillsDisplayDiv, _React$Component6);

	function SkillsDisplayDiv(props) {
		_classCallCheck(this, SkillsDisplayDiv);

		var _this6 = _possibleConstructorReturn(this, (SkillsDisplayDiv.__proto__ || Object.getPrototypeOf(SkillsDisplayDiv)).call(this, props));

		_this6.getSkillsList = _this6.getSkillsList.bind(_this6);
		return _this6;
	}

	_createClass(SkillsDisplayDiv, [{
		key: 'getSkillsList',
		value: function getSkillsList(skills) {

			var listItems = skills.map(function (skill, index) {
				return React.createElement(
					'div',
					{ className: 'skill-div', key: index },
					React.createElement(
						'label',
						{ className: 'skill-label' },
						skill
					)
				);
			});

			return listItems;
		}
	}, {
		key: 'render',
		value: function render() {
			var skills = this.props.skills;
			var isMobile = this.props.isMobile;
			var listItems = this.getSkillsList(skills);

			var classNameText = "gallery-div skills-div";
			if (isMobile) {
				classNameText = "gallery-div-mobile skills-div-mobile";
			}

			return React.createElement(
				'div',
				{ className: classNameText },
				listItems
			);
		}
	}]);

	return SkillsDisplayDiv;
}(React.Component);

// class MainTitleDiv extends React.Component {
//   render() {
//     return (
// 		<div className="main-title-div">
// 			<div className="main-title-labels-div">
// 			    <label className='main-title-left-label'>Collin Howard</label>
// 			    <label className='main-title-right-label'>collin.riley.howard@gmail.com</label>
// 		    </div>
// 	    </div>
//     );
//   }
// }

// <label className='main-title-top-label'>Collin Howard&ensp;|&ensp;Software Engineer</label>

var MainTitleDiv = function (_React$Component7) {
	_inherits(MainTitleDiv, _React$Component7);

	function MainTitleDiv(props) {
		_classCallCheck(this, MainTitleDiv);

		var _this7 = _possibleConstructorReturn(this, (MainTitleDiv.__proto__ || Object.getPrototypeOf(MainTitleDiv)).call(this, props));

		_this7.handleClick = _this7.handleClick.bind(_this7);
		return _this7;
	}

	_createClass(MainTitleDiv, [{
		key: 'handleClick',
		value: function handleClick() {
			var win = window.open('https://video-chat-280220.wl.r.appspot.com/', '_blank');
			win.focus();
		}

		// <img className='profile-image' src="call_program.png"></img>

	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ className: 'main-title-div' },
				React.createElement(
					'div',
					{ className: 'main-title-labels-div' },
					React.createElement(
						'label',
						{ className: 'main-title-top-label' },
						'Collin Howard'
					),
					React.createElement(
						'label',
						{ className: 'main-title-bottom-label' },
						'collin.riley.howard@gmail.com'
					),
					React.createElement(
						'label',
						{ className: 'main-title-bottom-label' },
						'408-717-0173'
					),
					React.createElement(
						'button',
						{ className: 'main-title-button', onClick: this.handleClick },
						'Latest Project'
					)
				),
				React.createElement(
					'div',
					{ className: 'main-title-bottom-labels-div' },
					React.createElement(
						'label',
						{ className: 'main-title-scroll-label' },
						'\u21E9\u2003\u2003 scroll \u2003\u2003\u21E9'
					)
				)
			);
		}
	}]);

	return MainTitleDiv;
}(React.Component);

// <ModalDiv />

var RootDiv = function (_React$Component8) {
	_inherits(RootDiv, _React$Component8);

	function RootDiv(props) {
		_classCallCheck(this, RootDiv);

		var _this8 = _possibleConstructorReturn(this, (RootDiv.__proto__ || Object.getPrototypeOf(RootDiv)).call(this, props));

		_this8.state = {
			windowWidth: window.innerWidth
		};
		_this8.updateWindowWidth = _this8.updateWindowWidth.bind(_this8);
		return _this8;
	}

	_createClass(RootDiv, [{
		key: 'updateWindowWidth',
		value: function updateWindowWidth() {
			this.setState({
				windowWidth: window.innerWidth
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			window.addEventListener('resize', this.updateWindowWidth);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			window.addEventListener('resize', this.updateWindowWidth);
		}
	}, {
		key: 'render',
		value: function render() {

			var projects = this.props.projects;
			var experiences = this.props.experiences;
			var skills = this.props.skills;
			var windowWidth = this.state.windowWidth;
			var minWindowWidth = 835;

			// DESKTOP (OR WIDE SCREEN)
			if (windowWidth >= minWindowWidth) {
				return React.createElement(
					'div',
					{ className: 'all-div' },
					React.createElement(MainTitleDiv, null),
					React.createElement(
						'label',
						{ className: 'main-subtitle-label fade' },
						'Projects'
					),
					React.createElement(ProjectsDisplayDiv, { projects: projects, infoType: 'project', isMobile: false }),
					React.createElement(
						'label',
						{ className: 'main-subtitle-label fade' },
						'Experience'
					),
					React.createElement(ProjectsDisplayDiv, { projects: experiences, infoType: 'experience', isMobile: false }),
					React.createElement(
						'label',
						{ className: 'main-subtitle-label skills-label' },
						'Skills'
					),
					React.createElement(SkillsDisplayDiv, { skills: skills, isMobile: false })
				);
			}

			// MOBILE (OR THIN SCREEN)
			return React.createElement(
				'div',
				{ className: 'all-div-mobile' },
				React.createElement(MainTitleDiv, null),
				React.createElement(
					'label',
					{ className: 'main-subtitle-label-mobile fade' },
					'Projects'
				),
				React.createElement(ProjectsDisplayDiv, { projects: projects, infoType: 'project', isMobile: true }),
				React.createElement(
					'label',
					{ className: 'main-subtitle-label-mobile fade' },
					'Experience'
				),
				React.createElement(ProjectsDisplayDiv, { projects: experiences, infoType: 'experience', isMobile: true }),
				React.createElement(
					'label',
					{ className: 'main-subtitle-label skills-label-mobile' },
					'Skills'
				),
				React.createElement(SkillsDisplayDiv, { skills: skills, isMobile: true })
			);
		}
	}]);

	return RootDiv;
}(React.Component);

// let windowWidth = window.innerWidth;

ReactDOM.render(React.createElement(RootDiv, { projects: projects, experiences: experiences, skills: skills }), document.getElementById('root'), function () {

	$(".main-title-labels-div").hover(function () {
		$(".main-title-bottom-labels-div").addClass("main-title-bottom-labels-div-hover");
	}, function () {
		$(".main-title-bottom-labels-div").removeClass("main-title-bottom-labels-div-hover");
	});

	$(window).scroll(function () {
		$(".main-title-scroll-label").css("opacity", 1 - $(window).scrollTop() / 100);
		$(".main-title-labels-div").css("opacity", 1 - $(window).scrollTop() / (window.innerHeight / 2));
	});

	$(window).on("load", function () {
		function fade() {
			var animation_height = $(window).innerHeight() * 0.5;
			var ratio = Math.round(1 / animation_height * 10000) / 10000;

			$('.fade').each(function () {

				var objectTop = $(this).offset().top;
				var windowBottom = $(window).scrollTop() + $(window).innerHeight();

				if (objectTop < windowBottom) {
					if (objectTop < windowBottom - animation_height) {
						/*                     $(this).html( 'fully visible' );
                          $(this).css( {
                              transition: 'opacity 0.1s linear',
                              opacity: 1
                          } ); */

						var objectBottom = $(this).offset().top + $(this).outerHeight();
						var windowTop = $(window).scrollTop();

						/*             document.write(objectBottom);
                  document.write(windowTop); */

						if (objectBottom > windowTop + 100) {
							if (objectBottom > windowTop + animation_height) {
								// $(this).html( 'fully visible' );
								$(this).css({
									transition: 'opacity 0.1s linear',
									opacity: 1
								});
							} else {
								// $(this).html( 'fading in/out' );
								$(this).css({
									transition: 'opacity 0.25s linear',
									opacity: (objectBottom - windowTop) * ratio
								});
							}
						} else {
							// $(this).html( 'not visible' );
							$(this).css('opacity', 0);
						}
					} else {
						// $(this).html( 'fading in/out' );
						$(this).css({
							transition: 'opacity 0.25s linear',
							opacity: (windowBottom - objectTop) * ratio
						});
					}
				} else {
					// $(this).html( 'not visible' );
					$(this).css('opacity', 0);
				}

				/*             var objectBottom = $(this).offset().top + $(this).outerHeight();
                var windowTop = $(window).scrollTop();
                
                document.write(objectBottom);
                document.write(windowTop);
                
                
                 if ( objectBottom > windowTop ) {
                    if ( objectBottom > windowTop + animation_height ) {
                        $(this).html( 'fully visible' );
                        $(this).css( {
                            transition: 'opacity 0.1s linear',
                            opacity: 1
                        } );
                
                    } else {
                        $(this).html( 'fading in/out' );
                        $(this).css( {
                            transition: 'opacity 0.25s linear',
                            opacity: (objectBottom - windowTop) * ratio
                        } );
                    }
                } else {
                    $(this).html( 'not visible' );
                    $(this).css( 'opacity', 0 );
                }
                 */
			});
		}
		$('.fade').css('opacity', 0);
		fade();
		$(window).scroll(function () {
			fade();
		});
	});

	// // Get the modal
	// var modal = document.getElementById("myModal");

	// // Get the image and insert it inside the modal - use its "alt" text as a caption
	// var img = document.getElementById("myImg");


	// $("#myImg").click(function() {

	// 	console.log('HERE');

	// 	var modalImg = document.getElementById("img01");
	// 	var captionText = document.getElementById("caption");

	// 	modal.style.display = "block";
	// 	modalImg.src = this.src;
	// 	captionText.innerHTML = this.alt;
	// });

	// // Get the <span> element that closes the modal
	// var span = document.getElementsByClassName("close")[0];

	// // When the user clicks on <span> (x), close the modal

	// $(".close").click(function() {
	// 	modal.style.display = "none";
	// });

});