// @ts-check

import React, { forwardRef } from 'react';
import { ReactComponent as Add } from '../_icons/add.svg';
import { ReactComponent as AddCircle } from '../_icons/add-circle.svg';
import { ReactComponent as AddCircleSm } from '../_icons/add-circle-sm.svg';
import { ReactComponent as AddContact } from '../_icons/add-contact.svg';
import { ReactComponent as AddSm } from '../_icons/add-sm.svg';
import { ReactComponent as Admin } from '../_icons/admin.svg';
import { ReactComponent as ArrowLeft } from '../_icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../_icons/arrow-right.svg';
import { ReactComponent as ArrowLeftSm } from '../_icons/arrow-left-sm.svg';
import { ReactComponent as ArrowRightSm } from '../_icons/arrow-right-sm.svg';
import { ReactComponent as Attic } from '../_icons/attic.svg';
import { ReactComponent as AuthUser } from '../_icons/auth-user.svg';
import { ReactComponent as BackgroundBlur } from '../_icons/background-blur.svg';
import { ReactComponent as Backyard } from '../_icons/backyard.svg';
import { ReactComponent as Basement } from '../_icons/basement.svg';
import { ReactComponent as Bathroom } from '../_icons/bathroom.svg';
import { ReactComponent as Bedroom } from '../_icons/bedroom.svg';
import { ReactComponent as BedroomCloset } from '../_icons/bedroom-closet.svg';
import { ReactComponent as Bold } from '../_icons/bold.svg';
import { ReactComponent as Calendar } from '../_icons/calendar.svg';
import { ReactComponent as Camera } from '../_icons/camera.svg';
import { ReactComponent as CameraFlip } from '../_icons/camera-flip.svg';
import { ReactComponent as CameraSm } from '../_icons/camera-sm.svg';
import { ReactComponent as Car } from '../_icons/car.svg';
import { ReactComponent as CaretDown } from '../_icons/caret-down.svg';
import { ReactComponent as CaretLeft } from '../_icons/caret-left.svg';
import { ReactComponent as CaretRight } from '../_icons/caret-right.svg';
import { ReactComponent as CaretUp } from '../_icons/caret-up.svg';
import { ReactComponent as CheckmarkCircle } from '../_icons/checkmark-circle.svg';
import { ReactComponent as ClearAll } from '../_icons/clear-all.svg';
import { ReactComponent as Clock } from '../_icons/clock.svg';
import { ReactComponent as Close } from '../_icons/close.svg';
import { ReactComponent as Closet } from '../_icons/closet.svg';
import { ReactComponent as CloseSm } from '../_icons/close-sm.svg';
import { ReactComponent as CloseWindow } from '../_icons/close-window.svg';
import { ReactComponent as ClipboardSearch } from '../_icons/clipboard-search.svg';
import { ReactComponent as Conservatory } from '../_icons/conservatory.svg';
import { ReactComponent as CopyToClipboard } from '../_icons/copy-to-clipboard.svg';
import { ReactComponent as Den } from '../_icons/den.svg';
import { ReactComponent as DialPad } from '../_icons/dial-pad.svg';
import { ReactComponent as DialPadDelete } from '../_icons/dial-pad-delete.svg';
import { ReactComponent as DiningRoom } from '../_icons/dining-room.svg';
import { ReactComponent as Dolly } from '../_icons/dolly.svg';
import { ReactComponent as Download } from '../_icons/download.svg';
import { ReactComponent as Edit } from '../_icons/edit.svg';
import { ReactComponent as Elevator } from '../_icons/elevator.svg';
import { ReactComponent as Ellipses } from '../_icons/ellipses.svg';
import { ReactComponent as Email } from '../_icons/email.svg';
import { ReactComponent as Eye } from '../_icons/eye.svg';
import { ReactComponent as EyeSm } from '../_icons/eye-sm.svg';
import { ReactComponent as EyeWithLine } from '../_icons/eye-with-line.svg';
import { ReactComponent as EyeWithLineSm } from '../_icons/eye-with-line-sm.svg';
import { ReactComponent as FamilyRoom } from '../_icons/family-room.svg';
import { ReactComponent as FilterMenu } from '../_icons/filter-menu.svg';
import { ReactComponent as Foyer } from '../_icons/foyer.svg';
import { ReactComponent as Graph } from '../_icons/graph.svg';
import { ReactComponent as Garage } from '../_icons/garage.svg';
import { ReactComponent as Hallway } from '../_icons/hallway.svg';
import { ReactComponent as HamburgerMenu } from '../_icons/hamburger-menu.svg';
import { ReactComponent as HangUp } from '../_icons/hang-up.svg';
import { ReactComponent as Help } from '../_icons/help.svg';
import { ReactComponent as HyperLink } from '../_icons/hyper-link.svg';
import { ReactComponent as Image } from '../_icons/image.svg';
import { ReactComponent as Invite } from '../_icons/invite.svg';
import { ReactComponent as Info } from '../_icons/info.svg';
import { ReactComponent as Italic } from '../_icons/italic.svg';
import { ReactComponent as Keyboard } from '../_icons/keyboard.svg';
import { ReactComponent as Kitchen } from '../_icons/kitchen.svg';
import { ReactComponent as Lanai } from '../_icons/lanai.svg';
import { ReactComponent as LaundryRoom } from '../_icons/laundry-room.svg';
import { ReactComponent as Link } from '../_icons/link.svg';
import { ReactComponent as LinkBroken } from '../_icons/link-broken.svg';
import { ReactComponent as ListBullet } from '../_icons/list-bullet.svg';
import { ReactComponent as ListNumber } from '../_icons/list-number.svg';
import { ReactComponent as LivingRoom } from '../_icons/living-room.svg';
import { ReactComponent as LooseLoad } from '../_icons/loose-load.svg';
import { ReactComponent as MasterBedroom } from '../_icons/master-bedroom.svg';
import { ReactComponent as MasterBedroomCloset } from '../_icons/master-bedroom-closet.svg';
import { ReactComponent as MicOff } from '../_icons/mic-off.svg';
import { ReactComponent as MicOn } from '../_icons/mic-on.svg';
import { ReactComponent as Minus } from '../_icons/minus.svg';
import { ReactComponent as MinusCircle } from '../_icons/minus-circle.svg';
import { ReactComponent as MinusSm } from '../_icons/minus-sm.svg';
import { ReactComponent as Mobile } from '../_icons/mobile.svg';
import { ReactComponent as Mover } from '../_icons/mover.svg';
import { ReactComponent as Notes } from '../_icons/notes.svg';
import { ReactComponent as OlFashionedPhone } from '../_icons/ol-fashioned-phone.svg';
import { ReactComponent as OpenWindow } from '../_icons/open-window.svg';
import { ReactComponent as Overflow } from '../_icons/overflow.svg';
import { ReactComponent as Pallet } from '../_icons/pallet.svg';
import { ReactComponent as PaperClip } from '../_icons/paperclip.svg';
import { ReactComponent as PaperPlane } from '../_icons/paper-plane.svg';
import { ReactComponent as Patio } from '../_icons/patio.svg';
import { ReactComponent as Pause } from '../_icons/pause.svg';
import { ReactComponent as PinTilt } from '../_icons/pin-tilt.svg';
import { ReactComponent as Play } from '../_icons/play.svg';
import { ReactComponent as Playroom } from '../_icons/playroom.svg';
import { ReactComponent as PlaySquare } from '../_icons/play-square.svg';
import { ReactComponent as PlaySquareSm } from '../_icons/play-square-sm.svg';
import { ReactComponent as PowerSwitch } from '../_icons/power-switch.svg';
import { ReactComponent as Rate } from '../_icons/rate.svg';
import { ReactComponent as RecordOff } from '../_icons/record-off.svg';
import { ReactComponent as RecordOn } from '../_icons/record-on.svg';
import { ReactComponent as Redirect } from '../_icons/redirect.svg';
import { ReactComponent as Reports } from '../_icons/reports.svg';
import { ReactComponent as ResizeCorner } from '../_icons/resize-corner.svg';
import { ReactComponent as RotateLeft } from '../_icons/rotate-left.svg';
import { ReactComponent as RotateRight } from '../_icons/rotate-right.svg';
import { ReactComponent as Search } from '../_icons/search.svg';
import { ReactComponent as SendToRoom } from '../_icons/send-to-room.svg';
import { ReactComponent as Settings } from '../_icons/settings.svg';
import { ReactComponent as ShareInventory } from '../_icons/share-inventory.svg';
import { ReactComponent as Shed } from '../_icons/shed.svg';
import { ReactComponent as SmartConsult } from '../_icons/smart-consult.svg';
import { ReactComponent as SMS } from '../_icons/sms.svg';
import { ReactComponent as StepOne } from '../_icons/step-one.svg';
import { ReactComponent as StepTwo } from '../_icons/step-two.svg';
import { ReactComponent as StepThree } from '../_icons/step-three.svg';
import { ReactComponent as Storage } from '../_icons/storage.svg';
import { ReactComponent as StorageUnit } from '../_icons/storage-unit.svg';
import { ReactComponent as StudyRoom } from '../_icons/study-room.svg';
import { ReactComponent as Survey } from '../_icons/test-passed.svg';
import { ReactComponent as TaskCheckbox } from '../_icons/task-checkbox.svg';
import { ReactComponent as Trash } from '../_icons/trash.svg';
import { ReactComponent as Truck } from '../_icons/truck.svg';
import { ReactComponent as Underline } from '../_icons/underline.svg';
import { ReactComponent as Upload } from '../_icons/upload.svg';
import { ReactComponent as User } from '../_icons/user.svg';
import { ReactComponent as UtilityRoom } from '../_icons/utility-room.svg';
import { ReactComponent as VolumeOn } from '../_icons/volume-on.svg';
import { ReactComponent as VolumeOff } from '../_icons/volume-off.svg';
import { ReactComponent as VideoOn } from '../_icons/video-on.svg';
import { ReactComponent as VideoOff } from '../_icons/video-off.svg';
import { ReactComponent as WarningCircle } from '../_icons/warning-circle.svg';

export interface IconProps {
  /**
The name of the icon you would like to used.
 */
  name: string;
  /**
Adds a className to the Icon
 */
  className?: string;
  /**
Changes the icon's stroke color. Can be 'purple', 'white', 'blue'.  Default is body text color.
 */
  stroke?: 'purple' | 'white' | 'blue' | 'red' | 'green';
  /**
Optional function that triggers when the icon is clicked.
 */
  onClick?: (e: React.MouseEvent) => void;
}

// const ParsedIcon = ({ name = '', stroke = '' }) => {
//   const props = {
//     className: stroke,
//   };
//   switch (name) {
//     case 'add':
//       return <Add {...props} />;
//     case 'add-circle':
//       return <AddCircle {...props} />;
//     case 'add-circle-sm':
//       return <AddCircleSm {...props} />;
//     case 'add-contact':
//       return <AddContact {...props} />;
//     case 'add-sm':
//       return <AddSm {...props} />;
//     case 'admin':
//       return <Admin {...props} />;
//     case 'auth-user':
//       return <AuthUser {...props} />;
//     case 'arrow-left':
//       return <ArrowLeft {...props} />;
//     case 'arrow-right':
//       return <ArrowRight {...props} />;
//     case 'arrow-left-sm':
//       return <ArrowLeftSm {...props} />;
//     case 'arrow-right-sm':
//       return <ArrowRightSm {...props} />;
//     case 'attic':
//       return <Attic {...props} />;
//     case 'background-blur':
//       return <BackgroundBlur {...props} />;
//     case 'backyard':
//       return <Backyard {...props} />;
//     case 'basement':
//       return <Basement {...props} />;
//     case 'bathroom':
//       return <Bathroom {...props} />;
//     case 'bedroom':
//       return <Bedroom {...props} />;
//     case 'bedroom-closet':
//       return <BedroomCloset {...props} />;
//     case 'bold':
//       return <Bold {...props} />;
//     case 'calendar':
//       return <Calendar {...props} />;
//     case 'car':
//       return <Car {...props} />;
//     case 'caret-down':
//       return <CaretDown {...props} />;
//     case 'caret-left':
//       return <CaretLeft {...props} />;
//     case 'caret-right':
//       return <CaretRight {...props} />;
//     case 'caret-up':
//       return <CaretUp {...props} />;
//     case 'camera':
//       return <Camera {...props} />;
//     case 'camera-flip':
//       return <CameraFlip {...props} />;
//     case 'camera-sm':
//       return <CameraSm {...props} />;
//     case 'checkmark-circle':
//       return <CheckmarkCircle {...props} />;
//     case 'clear-all':
//       return <ClearAll {...props} />;
//     case 'clock':
//       return <Clock {...props} />;
//     case 'close':
//       return <Close {...props} />;
//     case 'closet':
//       return <Closet {...props} />;
//     case 'close-sm':
//       return <CloseSm {...props} />;
//     case 'close-window':
//       return <CloseWindow {...props} />;
//     case 'clipboard-search':
//       return <ClipboardSearch {...props} />;
//     case 'conservatory':
//       return <Conservatory {...props} />;
//     case 'copy-to-clipboard':
//       return <CopyToClipboard {...props} />;
//     case 'den':
//       return <Den {...props} />;
//     case 'dial-pad':
//       return <DialPad {...props} />;
//     case 'dial-pad-delete':
//       return <DialPadDelete {...props} />;
//     case 'dining-room':
//       return <DiningRoom {...props} />;
//     case 'dolly':
//       return <Dolly {...props} />;
//     case 'download':
//       return <Download {...props} />;
//     case 'edit':
//       return <Edit {...props} />;
//     case 'elevator':
//       return <Elevator {...props} />;
//     case 'ellipses':
//       return <Ellipses {...props} />;
//     case 'email':
//       return <Email {...props} />;
//     case 'eye':
//       return <Eye {...props} />;
//     case 'eye-sm':
//       return <EyeSm {...props} />;
//     case 'eye-with-line':
//       return <EyeWithLine {...props} />;
//     case 'eye-with-line-sm':
//       return <EyeWithLineSm {...props} />;
//     case 'family-room':
//       return <FamilyRoom {...props} />;
//     case 'filter-menu':
//       return <FilterMenu {...props} />;
//     case 'foyer':
//       return <Foyer {...props} />;
//     case 'garage':
//       return <Garage {...props} />;
//     case 'graph':
//       return <Graph {...props} />;
//     case 'hallway':
//       return <Hallway {...props} />;
//     case 'hamburger-menu':
//       return <HamburgerMenu {...props} />;
//     case 'hang-up':
//       return <HangUp {...props} />;
//     case 'help':
//       return <Help {...props} />;
//     case 'hyper-link':
//       return <HyperLink {...props} />;
//     case 'image':
//       return <Image {...props} />;
//     case 'info':
//       return <Info {...props} />;
//     case 'invite':
//       return <Invite {...props} />;
//     case 'italic':
//       return <Italic {...props} />;
//     case 'keyboard':
//       return <Keyboard {...props} />;
//     case 'kitchen':
//       return <Kitchen {...props} />;
//     case 'lanai':
//       return <Lanai {...props} />;
//     case 'laundry-room':
//       return <LaundryRoom {...props} />;
//     case 'list-bullet':
//       return <ListBullet {...props} />;
//     case 'link':
//       return <Link {...props} />;
//     case 'link-broken':
//       return <LinkBroken {...props} />;
//     case 'list-number':
//       return <ListNumber {...props} />;
//     case 'living-room':
//       return <LivingRoom {...props} />;
//     case 'loose-load':
//       return <LooseLoad {...props} />;
//     case 'master-bedroom':
//       return <MasterBedroom {...props} />;
//     case 'master-bedroom-closet':
//       return <MasterBedroomCloset {...props} />;
//     case 'mic-off':
//       return <MicOff {...props} />;
//     case 'mic-on':
//       return <MicOn {...props} />;
//     case 'minus':
//       return <Minus {...props} />;
//     case 'minus-circle':
//       return <MinusCircle {...props} />;
//     case 'minus-sm':
//       return <MinusSm {...props} />;
//     case 'mobile':
//       return <Mobile {...props} />;
//     case 'mover':
//       return <Mover {...props} />;
//     case 'notes':
//       return <Notes {...props} />;
//     case 'ol-fashioned-phone':
//       return <OlFashionedPhone {...props} />;
//     case 'open-window':
//       return <OpenWindow {...props} />;
//     case 'overflow':
//       return <Overflow {...props} />;
//     case 'pin-tilt':
//       return <PinTilt {...props} />;
//     case 'pallet':
//       return <Pallet {...props} />;
//     case 'paper-plane':
//       return <PaperPlane {...props} />;
//     case 'paperclip':
//       return <PaperClip {...props} />;
//     case 'patio':
//       return <Patio {...props} />;
//     case 'pause':
//       return <Pause {...props} />;
//     case 'play':
//       return <Play {...props} />;
//     case 'playroom':
//       return <Playroom {...props} />;
//     case 'play-square':
//       return <PlaySquare {...props} />;
//     case 'play-square-sm':
//       return <PlaySquareSm {...props} />;
//     case 'power-switch':
//       return <PowerSwitch {...props} />;
//     case 'rate':
//       return <Rate {...props} />;
//     case 'record-off':
//       return <RecordOff {...props} />;
//     case 'record-on':
//       return <RecordOn {...props} />;
//     case 'redirect':
//       return <Redirect {...props} />;
//     case 'reports':
//       return <Reports {...props} />;
//     case 'resize-corner':
//       return <ResizeCorner {...props} />;
//     case 'rotate-left':
//       return <RotateLeft {...props} />;
//     case 'rotate-right':
//       return <RotateRight {...props} />;
//     case 'search':
//       return <Search {...props} />;
//     case 'send-to-room':
//       return <SendToRoom {...props} />;
//     case 'settings':
//       return <Settings {...props} />;
//     case 'share-inventory':
//       return <ShareInventory {...props} />;
//     case 'shed':
//       return <Shed {...props} />;
//     case 'smart-consult':
//       return <SmartConsult {...props} />;
//     case 'sms':
//       return <SMS {...props} />;
//     case 'step-one':
//       return <StepOne {...props} />;
//     case 'step-two':
//       return <StepTwo {...props} />;
//     case 'step-three':
//       return <StepThree {...props} />;
//     case 'storage':
//       return <Storage {...props} />;
//     case 'storage-unit':
//       return <StorageUnit {...props} />;
//     case 'study-room':
//       return <StudyRoom {...props} />;
//     case 'task-checkbox':
//       return <TaskCheckbox {...props} />;
//     case 'trash':
//       return <Trash {...props} />;
//     case 'truck':
//       return <Truck {...props} />;
//     case 'underline':
//       return <Underline {...props} />;
//     case 'upload':
//       return <Upload {...props} />;
//     case 'user':
//       return <User {...props} />;
//     case 'utility-room':
//       return <UtilityRoom {...props} />;
//     case 'video-on':
//       return <VideoOn {...props} />;
//     case 'video-off':
//       return <VideoOff {...props} />;
//     case 'volume-on':
//       return <VolumeOn {...props} />;
//     case 'volume-off':
//       return <VolumeOff {...props} />;
//     case 'survey':
//       return <Survey {...props} />;
//     case 'warning-circle':
//       return <WarningCircle {...props} />;
//     default:
//       return <span className='tiny-text'>Icon doesn't exist</span>;
//   }
// };

/**
 * Below is a list of icons and their names.
 * Use the code snippet `<Icon name='<name of icon>'/>` to bring an Icon into the app.
 */

// export const Icon = forwardRef<HTMLSpanElement, IconProps>(({ name, stroke, className, onClick }: IconProps, ref) => {
//   return (
//     <span className={`icon ${className ?? ''}`} onClick={onClick} ref={ref}>
//       <ParsedIcon name={name} stroke={stroke} />
//     </span>
//   );
// });

export const Icon = forwardRef<HTMLSpanElement, IconProps>(({ name, stroke, className, onClick }: IconProps, ref) => {
      console.log('name',name)
	return (
					<svg
					className={className}
					viewBox={'0 0 24 24'}
					width={`24px`}
					height={`24px`}
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
				>
					<path stroke={stroke} d={'./_icons/'+name} fill='white'/>
				</svg>
      );
    });