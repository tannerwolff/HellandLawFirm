import React from 'react';
import {Link} from 'react-router-dom';


export default function() {
return  <div className='complete-areasofpractice-wrapper'>
            <div className='areasofpractice-content-wrapper'>
                <div className='paralax-title-wrapper'>
                    <div className='areasofpractice-heading'>
                        Areas of Practice
                    </div>
                </div>

                <div className='different-areasofpractice-wrapper'>
                    <div className='total-area-with-definition'>
                        <div className='left-side-area-examples'>
                            <div className='areaofpractice-title'>
                                Civil Litigation
                            </div>
                            <div className='areaofpractice-example'>
                                Collections, Disputes, Torts
                            </div>
                        </div>

                        <div className='areaofpractice-definition'>
                            Disputes, commonly involving individuals, groups of people, businesses, or other entities, handled legally by the courts.
                        </div>
                    </div>

                    <div className='separation-line'></div>

                    <div className='total-area-with-definition'>
                        <div className='left-side-area-examples'>
                            <div className='areaofpractice-title'>
                                Medical Malpractice
                            </div>
                            <div className='areaofpractice-example'>
                                Wrongful Death, Negligence, Premature Discharge, Surgical Errors
                            </div>
                        </div>

                        <div className='areaofpractice-definition'>
                            Occurring when a hospital, doctor or other health care professional causes injury to a patient through either omission or a negligent act.
                        </div>
                    </div>

                    <div className='separation-line'></div>

                    <div className='total-area-with-definition'>
                        <div className='left-side-area-examples'>
                            <div className='areaofpractice-title'>
                                Family Law
                            </div>
                            <div className='areaofpractice-example'>
                                Adoptions, Guardianships/Conservatorships, Divorces, Name Changes
                            </div>
                        </div>

                        <div className='areaofpractice-definition'>
                            Area of law which deals with family matters and domestic relations such as divorces or adoptions.
                        </div>
                    </div>

                    <div className='separation-line'></div>

                    <div className='total-area-with-definition'>
                        <div className='left-side-area-examples'>
                            <div className='areaofpractice-title'>
                                Corporate Law
                            </div>
                            <div className='areaofpractice-example'>
                                Entity Formations, Corporate Maintenance, and Compliance Contracts 
                            </div>
                        </div>

                        <div className='areaofpractice-definition'>
                            Also known as business law, this is the area of law which pertains to the rights, relations, and conduct of people, companies, organizations and businesses.
                        </div>
                    </div>

                    <div className='separation-line'></div>

                    <div className='total-area-with-definition'>
                        <div className='left-side-area-examples'>
                            <div className='areaofpractice-title'>
                                Estate Planning | Probate
                            </div>
                            <div className='areaofpractice-example'>
                                Trust Agreements, Wills, Powers of Attorney, Revocable Transfer on Death Deeds, and ​Administering of Decedent’s Estate (Satisfying Debts and Distributing Assets)
                            </div>
                        </div>

                        <div className='areaofpractice-definition'>
                            Estate Planning involves the preparation of documents such as wills, trusts, powers of attorney, revocable transfer on death deeds, and any other documents necessary to facilitate the transfer and/or management of a person’s property after their death.<br/>
                            Probate is the process of administering the estate of a deceased individual by satisfying outstanding debts and distributing all remaining assets.
                        </div>
                    </div>

                    <div className='separation-line'></div>

                    <div className='total-area-with-definition'>
                        <div className='left-side-area-examples'>
                            <div className='areaofpractice-title'>
                                Personal Injury
                            </div>
                            <div className='areaofpractice-example'>
                                Cost of Rehabilitation & Therapy, Property Damage, Lost Wages & Future Income, Pain, Suffering & Emotional Distress, Other Accident-Related Costs, Past, Current & Future Medical Bills
                            </div>
                        </div>

                        <div className='areaofpractice-definition'>
                            These cases are designed to protect you or your property if injured or harmed due to someone else’s act or failure to act.
                        </div>
                    </div>

                    <div className='separation-line'></div>

                    <div className='total-area-with-definition'>
                        <div className='left-side-area-examples'>
                            <div className='areaofpractice-title'>
                                Real Estate
                            </div>
                            <div className='areaofpractice-example'>
                                Purchase and Sale Agreements, Leases, Deeds, Easements, Contract for Deeds, Trust Indentures, Mortgages
                            </div>
                        </div>

                        <div className='areaofpractice-definition'>
                            This is the area of law that governs buying, selling, using and the peaceful enjoyment of real property.
                        </div>
                    </div>

                    <div className='separation-line'></div>

                    <div className='total-area-with-definition'>
                        <div className='left-side-area-examples'>
                            <div className='areaofpractice-title'>
                                Mediations
                            </div>
                            <div className='areaofpractice-example'>
                                Divorces and Civil Matters
                            </div>
                        </div>

                        <div className='areaofpractice-definition'>
                            Mediation is a structured, interactive process where an impartial third party assists disputing parties in resolving conflict through the use of specialized communication and negotiation techniques.
                        </div>
                    </div>

                    <div className='separation-line'></div>

                    <div className='total-area-with-definition'>
                        <div className='left-side-area-examples'>
                            <div className='areaofpractice-title'>
                                Criminal Defense
                            </div>
                            <div className='areaofpractice-example'>
                                Plea Bargaining, Jury Participation, Analysis of Evidence, and Sentencing
                            </div>
                        </div>

                        <div className='areaofpractice-definition'>
                            This consists of the legal protections afforded to people who have been accused of committing a crime.
                        </div>
                    </div>


                </div>

                <div className='areasofpractice-contact-link'>
                <Link to="/getintouch"><b>Click Here to Get in Touch with a Lawyer</b></Link>
                </div>
            </div>
        </div>
}