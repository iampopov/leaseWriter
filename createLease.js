const date = new Date()
function createLease(d) {
return `
RENTAL AGREEMENT

1) PARTIES: This agreement is entered into on this date ${date} between the following parties RESIDENT(S): ${d.part1} ${d.part2} and MANAGER: ${d.landlordName}. Resident(s) agree(s) to rent from the owner of the premises at the following location subject to the terms and conditions of this agreement.

2) SUBJECT PROPERTY: ${d.subj}

3.) STARTING / ENDING DATES OF LEASE

a) This lease begins on ${d.bdate}. This lease ends on ${d.edate}.

b) To end this lease Landlord or Tenant must give 30 days notice before the ending date or any renewal period.

c) This lease automatically renews on a month-to-month basis if not ended or changed by either party.

4) MOVE-IN COSTS AMOUNT CHARGE / DESCRIPTION

Rent $${d.rent}/month

Security Deposit $${d.rent} Refundable 

Total Due $${d.rent*2}

Total rent due for the entire length of lease $${d.rent*12}/year.

5) ADDRESS TO SEND RENT PAYMENTS: ${d.landlordAddress}. Rent will be only collected by mail or electronically via Cozy account. Hand-delivered mail will never be accepted. Payments only in the forms of checks or money order (if mailed) will be made to “Ivan Popov.”

6) TRADITIONAL DELIVERY OF PAYMENTS: Please be advised that any payments lost in the mail will be treated as if unpaid until received by management. If a check is returned unpaid for whatever reason, checks will no longer be accepted for at least six months. Resident will be required to pay by certified funds only. To avoid potential problems, we suggest one of the worry free payment methods such as Cozy electronic payments.

7) LATE PAYMENT AND ADDITIONAL RENT CHARGES:

•    The rental amount each month is $${d.rent} and is due by the 1st day of each month.

•    Landlord will send a Notice to Pay Rent or Move if Landlord does not receive rent by the 10th day of the month.

•    A court action to remove tenant begins on the 25th day. All court costs are paid by Tenant.

•     If Tenant mails rent to Landlord, the postmark date of the letter is the date of payment.

•    Rent is considered late if postmarked after the 15th day of each month. Rent is $25 more if not paid by the due date.

•    Rent is an additional $50 if not paid by the 25th.

•    Charges not paid when due become additional rent for the next month’s rent.

•    Any dishonored check shall be treated as unpaid rent, and be subject to a handling fee of $30 and must be made good by cash, money order, or certified check within 24 hours of notification. In the event of a dishonored check, subsequent payments must be made in certified funds (not cash) until the end of the term of the lease.

8) ORDER IN WHICH RENT PAYMENT IS APPLIED: Landlord applies rent received to money due from the past in the following order:

1. Additional Rent Charges  

2. Tenant Owed Utility Bills 

3. Legal and Court Costs

4. Other Fees Not Paid

5. Past Rent

6. Current Rent

7. Damages to Leased Property

9) SECURITY DEPOSIT AND RETURN THEREOF: Upon execution of this lease, Tenant will deposit with Landlord the sum of $${d.rent}, the amount of which does not exceed 1 &1/2; months rent, which is to be held as collateral security and applied on any rent or any other charge that may remain due and owing at the expiration of this agreement, any extension thereof or holding over period or applied on any damages to the premises caused by the Tenant, his family, invitees, employees, trades people or pets, or other expenses suffered by Landlord as a result of a breach of any covenant of the Lease. Landlord shall deposit Tenant's security deposit in a State or federally chartered bank, savings bank or savings and loan association in this State insured by an agency of the federal government in an interest bearing account. Within thirty (30) days, Landlord shall notify Tenant of the name and address of the State or federally chartered bank, savings bank or savings and loan association in which the deposit is made, and the amount thereof. Landlord shall be entitled to retain a sum equivalent to one percent (1%) per annum or 12.5% of the aggregate interest yield on the security deposit, whichever is greater, less the amount of any service fee charged by the State or federally chartered bank, savings bank or savings and loan association. Tenant may not utilize the security deposit as rent nor shall he deduct same from the last month's rent nor require the Landlord to indemnify itself from said sum of money or any part thereof with respect to any particular violation or default of Tenant, however, Tenant's security deposit can be credited toward the payment of rent due on the renewal or anniversary of this Lease. In the event that any part of the said security deposit shall have been utilized by Landlord, prior to the anniversary or renewal of this Lease, in accordance with the terms hereof or applicable law, Tenant shall, upon the delivery notice of same, immediately deposit with the Landlord the amount so applied by Landlord so that the Landlord shall have the full deposit on hand at all times during the term of this lease and any renewal thereof or holding over. In the event of the sale of the property upon which this premises is situated or the transfer or assignment by the Landlord of this Lease, the Landlord shall have the right to transfer said security deposit to the transferee and notify Tenant, within five (5) days of such transfer, by registered or certified mail of the amount transferred and the name and address of the transferee and Landlord shall be considered released from all liability for the return of the security deposit, and Tenant shall look solely to the new Landlord for the return of his security deposit. It is agreed that the foregoing shall apply to every transfer or assignment made on the security deposit to a new Landlord.

Within thirty (30) days after Tenant has vacated the premises, Landlord shall furnish Tenant, by personal delivery, registered or certified mail, a copy of an itemized statement indicating the basis for, and the amount of, any security received and the disposition of the security and shall return any remaining portion of the security to Tenant.

Landlord is not obligated to return Tenant's security deposit or give Tenant a written description of damages and charges until Tenant gives the landlord a written statement of Tenant's forwarding address for the purpose of refunding the security deposit.

10) NUMBER OF OCCUPANTS: The most people allowed to live in the leased property are ${d.adults} adult(s) ${d.kids} child(ren). Names of all occupants not signing this lease: ${d.kidss}; Please provide in writing any additional occupants upon moving. Rent will increase $50/mo for each occupant.

11) ADDITIONAL RESIDENTS: Persons other than those specifically listed on the Rental Agreement shall be strictly prohibited from staying in the rental unit for more than 7 consecutive days, or a total of 20 days in any twelve month period. For purposes of this section, "staying in the rental unit" shall include, but not be limited to, long-term or regular house guest, live-in baby sitters, visiting relatives, etc. Resident shall notify the Management in writing any time the Resident expects any guest will be staying in excess of the time limits in this paragraph. Additional residents cannot occupy the premised without first being approved by management and are subject to full screening procedures. If additional residents are accepted, this is also subject to additional rent and security deposit being required. Unauthorized residents are a violation of this agreement and are grounds for termination.

12) ASSIGNMENT and SUBLETTING: Resident will not sublet or re-let any part of the premises or assign this Agreement without prior consent of the landlord or management.

13) UTILITIES: Resident(s) will be responsible and pay for the following utilities, including all required deposits: Electric, Gas, Cable, portion of cold water billed on periodical basis by landlord. 

14) CARE AND USE OF THE LEASED PROPERTY

a) Primary Residence: Tenant agrees to use the leased property as a private residence only for tenant and authorized occupants only.

b) Use of Leased Property Tenant agrees not to use the leased property for any unlawful or hazardous purposes. Tenant needs written permission from Landlord before using the leased property for any business or profession.

c) Obey all laws: Tenant agrees to obey government housing regulations, local and state laws, and condominium and home owner association rules as they apply to Tenants.

d) Keep safe and clean: Tenant agrees to keep the leased property safe against fire and water damage. Tenant agrees to remove trash, garbage, and other waste in a safe manner.

e) Heating sources: Tenant agrees not to use any other heating source than the one provided in the leased property. Tenant will keep temperature at 55 degrees or above at all times.

15) TENANT’S RESPONSIBILITIES

a) No Noise: Tenant is responsible for the behavior and conduct of all people, either living with or visiting the Tenant. It is Tenant’s responsibility to make sure these individuals behave in a manner that will not disturb neighbors.

b) Payment of Utilities: Tenant agrees to pay on time all utility bills for which Tenant is responsible. Section 13 lists Utility Services.

c) Pests: Landlord is giving the leased property free of insects, rodents, and pests at move-in. Tenant agrees to pay for a pest control service if needed after the tenth (10th) day of move-in.

d) Locks: Tenant agrees not to change locks or put additional locks on doors without Landlord’s written permission. Landlord may remove any locks put on by Tenant. Tenant will pay the cost of the new locks.

e) Phone Numbers: Tenant agrees to provide Landlord with current home and work phone numbers and will tell Landlord of any change in these numbers.

f) Emails: Tenant agrees to provide Landlord with the email address to be used for electronic payments via Cozy.co

16) LANDLORD’S RESPONSIBILITIES

a) Government Regulations: Landlord agrees to keep the leased property and common areas as required by law or government regulation.

b) Good Repair: Landlord agrees to keep in good repair and working order the electrical, plumbing, sanitary, heating, and all other services. Tenant will advise Landlord in writing of any of these items not in good repair or working order. Landlord is not responsible for damage caused by Tenant negligence or intentional acts.

17) FINANCIAL HARDSHIP: Because unforeseen circumstances may occur during the rental term which may create difficulty for residents to make timely rent payment, residents agree to work with owner and permit direct contact from the owner with the following individuals, companies or organizations for assistance in past due rental payments. Please provide names and phone numbers of individuals who may be able to provide assistance for payment of rent should you need temporary financial assistance.

Emergency Contact #1

Name ${d.emName} Phone ${d.emPhone}

Parent or Cosigner

Name ${d.cosignerName} Phone ${d.cosignerPhone}

Signature____________________

Date______________________

18) CONDUCT: Resident, family and guests shall not make or allow unreasonable noise or sound. Resident and/or guests shall not disturb other Residents' peaceful enjoyment of the premises. Disorderly conduct will result in a notice to vacate the premises and termination of agreement. In addition, Residents are responsible for all actions and damages caused by Resident's guests.

19) NOTICES: Any notice is deemed served on the day on which it is both mailed by first class mail to the Resident at the premises, and attached in a secure manner to the main entrance of that portion of the premises of which Resident has possession.

20) REMEDIES/ATTORNEY'S FEES: Nothing in this Agreement shall limit the right of the Manager to terminate this Agreement as provided by any provision of the Massachusetts Law about Landlord and Tenant. If civil action is instituted in connection with this Agreement, the prevailing party shall be entitled to recover court costs and any reasonable attorney's fees.

21) MANAGER/AGENT FOR SERVICE: The Name, address and phone of the manager and agent for service is: ${d.landlordName} ${d.landlordAddress}.

22) MAJOR MAINTENANCE GUARANTEE: Residents understand and agree that the following major repairs are the responsibility of the owners and managers

1) Roof, windows, siding, and doors

2) Heating and cooling systems

3) Electrical and plumbing systems.

The owners/managers agree to guarantee that these major repairs will be fixed within 72 hours after notification of the problem to owner/manager. The residents understand that if a major repair is not corrected within 72 hours after notification, the resident will receive FREE RENT on a prorated basis starting the fourth day after the day of notification until the problem is corrected. Residents further understand and agree that the 72 hour clock does not start ticking until after the owner has been directly notified of the problem and provides confirmation of that acknowledgment to resident. The maintenance guarantee will not be honored if the maintenance problem was caused because of the residents' negligence, abuse or fault. The resident also agrees that in order for the owner to honor the guarantee, the owner or manager must be given access into the building, with the resident's permission, to correct the problem. Free rent will be awarded in the form of a cash rebate following the next on-time rent received.

23) YARD/GROUNDS: Resident shall properly care for and mow the grass and adequately water the lawn, shrubbery and grounds. If yard is not properly maintained, management reserves the right to hire someone to mow or care for yard and charge the expense to the resident as additional rent, after first advising the resident that they have 72 hours to handle the responsibility.

24) ABANDONMENT: Any goods, vehicles, or other property left on the premise after termination of the tenancy by any means shall be considered abandoned and disposed of as provided by statute.

25) COMPLIANCE WITH THE LAW: Resident shall not violate any applicable local, state or federal law or regulation in or about the premises.

26) INSURANCE: Owner and Management are not responsible for any loss or damage to property owned by Resident or guests unless resulting from Management's intentional or negligent acts. It is understood that all residents should carry renter's insurance for fire, extended coverage and liability to cover accidental injury and damage or loss of personal property due to fire or theft.

27) NON-WAIVER AND ACCEPTING PAYMENTS: Should the owner or manager accept any partial or late rent payments, this in no way constitutes a waiver of the Owner, nor affects any notice of eviction proceedings previously given. Waiver by either party of strict performance of any provision of this agreement shall not be a waiver of or prejudice the party's right to require strict performance of the same provision in the future or any other provision.

28) PETS: Resident and/or guests shall not maintain any pets upon the premises, without prior written consent of the Management. No animal, bird, reptile or fish of any kind will be kept on the premises, even temporarily, except properly trained dogs needed by blind, deaf or disabled persons. If a pet is accepted, (not referring to trained dogs for assistance) this is subject to payment of a higher monthly rent and additional deposit. 

29) EXTENDED ABSENCE: Resident will notify Landlord in advance if Resident will be away from the premises for 7 or more consecutive days. During such absence, Landlord may enter the premises at times reasonably necessary to maintain the property and inspect for needed repairs.

30) SATISFACTORY INSPECTION:

a) Tenant agrees to give Landlord a signed property condition inspection sheet when signing this lease. When this lease ends, Tenant is responsible for all items needing repair not listed on the inspection sheet, OR

b) Tenant may decide to keep the inspection sheet beyond the date of lease signing for further inspection. It is Tenant’s responsibility to return a signed copy by certified mail within five (5) days to the Landlord.

c) If the inspection sheet is not returned within the five (5) days, Tenant agrees the leased property is in satisfactory condition.

31) NO OTHER PROMISES: No promises have been made to Resident except as contained in this agreement, and as follows: 

32) USE OF PREMISES. The premises shall be used as a dwelling unit and for no other purposes. Resident shall use, in a reasonable manner, all facilities, utilities and appliances on the premises and shall maintain the premises and facilities in a clean and sanitary condition at all times and upon termination of the tenancy shall surrender the premises in as good condition as when received, ordinary wear and tear and damage by the elements excepted. Resident further agrees to make all utility payments, (that are listed in their name), on time during the term of this tenancy and will be considered in breach of this agreement for nonpayment and will be held liable for any resulting added charges and damages.

33) PLUMBING: Expense or damage caused by stoppage of waste pipes, overflow of bathtubs, toilets or washbasins caused by Resident's conduct shall be Resident's responsibility.

34) ALTERATIONS: Resident shall not tamper with or make alterations (including painting, nail holes, contact or wallpaper) to the premises without Manager's prior written consent. All curtains, mini-blinds, fixtures, shelves and carpet present in the premises before move-in, must remain when resident vacates. In addition, locks may not be changed or added without Owner's or manager's prior written permission. And if permission is granted, a copy of any new keys will be given to the management within three days after the change. If resident is locked out of the premises, there is a charge of $100 to open the premises between the hours of 8 AM and 6 PM. A charge of $50 for opening the premises beyond those hours. Additional charges apply if key is lost and locks must be changed.

35) VEHICLES: Only authorized vehicles may be parked on the premises. These vehicles include: ${d.vehicle}. All vehicles kept on the premises must be operational and have current registration, tags, decals and license required by local and state laws. Any vehicle not meeting these requirements or unauthorized vehicles will be removed at the resident's expense after being given 72 hour notification. Vehicles must be parked only on paved or designated areas. Resident further understands that no repairing, servicing or painting of the vehicle is permitted on the premises. Resident also agrees never to park or store a recreational vehicle, motor home or trailer of any type.

36) REPAIRS/REPORTING: Resident shall notify manager immediately in writing of all equipment malfunctions, failure to supply services, or repairs needed. Resident shall not tamper with or repair heating/ac, locks, without first obtaining written consent of owner.

37) INDEMNIFICATION: Resident shall indemnify, defend and hold owner harmless from any claim, loss, or liability arising out of or related to any activity on Premises of Resident, and any guest. Resident's duty to indemnify shall not apply to or prevent any claim by Resident against manager for injury or damage to Resident or Resident's property for which manager may be liable.

38) APPLIANCES: Unless otherwise stated as part of the custom rental package, this rental agreement does NOT include any appliances. Appliances that are located on the premises are there solely at the convenience of the owner, who assumes no responsibility for their operation. While on the premises, residents are free to use them; however, residents do so at their own risk. In the event appliances fail to function, the owner is not liable for repair or damages. If residents wish, at any time they may request that the appliances be removed. The owner will dispose of them at his expense.

39) MANAGER'S RIGHT TO ACCESS: Manager shall have the right to enter the premises in order to inspect the Premises, make necessary or agreed repairs or improvements, supply necessary or agreed services, or show the premises to prospective residents, purchasers or contractors. Except in case of emergency, agreement to the contrary by Resident, or unless it is impractical to do so, manager shall give Resident at least 24 hours notice of manager's intent to enter, and may enter only at reasonable times. Manager shall also have the right to enter the Premises when Resident has abandoned or surrendered the Premises, or during any absence of Resident in excess of 7 days. Resident shall not unreasonably withhold consent for manager to enter the premises.

40) RESIDENT'S TERMINATION NOTICE: Resident may not terminate this rental agreement without (30) day written notice if this is a month-to-month tenancy. Failure of Resident to provide appropriate written notice to terminate a month-to-month tenancy will result in a Resident's continuing obligation under this Agreement for up to thirty (30) days.

41) LIENS: Except with respect to activities for which manager is responsible, Resident shall pay as due all claims for work done on and for services rendered or material furnished to the Premises, and shall keep the Premises free from any liens caused by Resident's failure to meet Resident's obligations.

42) DAMAGE AND DESTRUCTION: In the event the Premises is severely damaged or destroyed by fire or other casualty, either party may terminate the lease. In the event damage was caused by resident's action or neglect, resident will be held liable for all damages.

43) SECURITY DEPOSITS

a) If Tenant breaks this lease in any way, the security deposit is not refundable.

b) Tenant agrees to give Landlord a written forwarding address and return all keys before moving from the leased property. Failure to do so will allow Landlord to keep Tenant’s security deposit in full.

c) Within 30 days of Tenant moving, Landlord forwards the balance of the security deposit, plus any interest due. Landlord gives Tenant a list detailing the costs of all damages subtracted from the security deposit.

d) Landlord will use security deposit money in the following order:

1. Additional Rent Charges 

2. Tenant-owed Utility Bills 

3. Legal and Court Costs 

4. Other Fees Not Paid

5. Past Due Rent

6. Current Rent

7. Damages to Leased Property

e) Tenant can not use the security deposit as payment for any month’s rent including the last month’s rent without court permission.

44) RETURN OF SECURITY DEPOSIT

The return of Tenant’s security deposit is subject to the following conditions:

a) Full term of lease has ended;

b) Landlord has received a written forwarding address of tenant before moving;

c) All rent paid in full;

d) All keys and other items that Landlord provided are returned;

e) No damage to the property has occurred beyond normal wear and tear;

f) All personal property has been removed;

g) The entire leased property has been cleaned, including all appliances;

h) Holes in walls, scratches in woodwork, holes or damage to flooring whether carpeting, tile, or wood, have been repaired according to standard practices;

i) No unpaid late charges or rent remains due;

j) All utility bills are paid in full and written proof given to Landlord;

k) Light fixtures have been cleaned and bulbs replaced where needed;

l) All carpets have been professionally cleaned and written proof given to Landlord.

45) JOINT LIABILITY: Each person signing this Agreement as a Resident is jointly and severally liable for all the terms of this agreement.

46) ADDITIONAL PROVISIONS & MODIFICATIONS TO THIS: Any additions or modifications to this Agreement must be in writing. The following additional provisions are part of this agreement: ${d.additional}.

47) VALIDITY OF EACH PART: If any portion of this Agreement is held to be invalid, its invalidity will not affect the enforceability of any other provision.

48) GROUNDS FOR TERMINATION: The failure of Resident or guests to comply with any term of this agreement is grounds for termination, with appropriate notice and procedures required by law.

49) READ THIS ENTIRE AGREEMENT: That Resident has read all the stipulations contained in the rental agreement, agrees to comply and has received a copy thereof.

50) BILLING FOR UTILITIES THAT REMAIN IN LANDLORD’S NAME: If landlord keeps utility bills in landlord’s name, or local municipalities require bills to stay in landlord’s name, landlord will forward bill to tenant. Tenant is then responsible to pay his/her portion to the landlord promptly.

51) SMOKING: No smoking will be allowed in the unit.

Resident's signature: ___________________________${d.part1} Date ${date}

Resident's signature: ___________________________${d.part2} Date ${date}


Manager signature: ____________________________${d.landlordName} Date ${date}

`;
}

module.exports = createLease;
  