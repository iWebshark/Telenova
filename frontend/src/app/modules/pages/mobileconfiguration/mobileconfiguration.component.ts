import {Component, OnInit} from '@angular/core';
import {GroupedOfferingsModel} from "../../../dto/groupedofferings.model";
import {OfferingService} from "../../../services/offering.service";
import {SpecificationService} from "../../../services/specification.service";
import {SpecificationModel} from "../../../models/specification.model";
import {OfferDTOModel} from "../../../dto/offerdto.model";
import {OfferService} from "../../../services/offer.service";
import {OfferingModel} from "../../../models/offering.model";
import {OfferStatusModel} from "../../../models/offerstatus.model";
import {OfferModel} from "../../../models/offer.model";
import {AuthService} from "../../../services/security/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-mobileconfiguration',
  templateUrl: './mobileconfiguration.component.html',
  styleUrls: ['./mobileconfiguration.component.css']
})
export class MobileconfigurationComponent implements OnInit {

  private offers: OfferDTOModel[];

  private offerStatuses: OfferStatusModel[];

  private groupedOfferings: GroupedOfferingsModel;
  private specifications: SpecificationModel[];

  public newOffer: OfferDTOModel = new OfferDTOModel();

  constructor(private offeringService: OfferingService,
              private specificationService: SpecificationService,
              private offerService: OfferService,
              private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
    if(this.auth.user.role.id == '4') {
      this.router.navigate(['/']);
    }
    this.offerService.getMobileOffers().subscribe(value => {
      this.offers = value as OfferDTOModel[];
    });
    this.offeringService.getGroupedOfferingsBySpecId('1').subscribe(value => {
      this.groupedOfferings = value as GroupedOfferingsModel;
    });
    this.specificationService.getAllSpecifications().subscribe(value => {
      this.specifications = value as SpecificationModel[];
    });
    this.offerService.getAllOfferStatuses().subscribe(value => {
      this.offerStatuses = value as OfferStatusModel[];
    });
  }

  createOffer(): void {
    this.newOffer.offer.offerStatus = this.getOfferStatus('1');
    this.newOffer.offer.specification = this.getSpecification('1');
    this.offerService.createMobileOffer(this.newOffer).subscribe(value => {
      this.ngOnInit();
    })
  }

  getSpecification(id: string): SpecificationModel {
    return this.specifications.find(obj => obj.id == id);
  }

  getOfferStatus(id: string): OfferStatusModel {
    return this.offerStatuses.find(obj => obj.id == id);
  }

  setOfferStatus(offerId: string, statusId: string): void {
    let offerS: OfferModel = new OfferModel();
    offerS.id = offerId;
    offerS.offerStatus = this.getOfferStatus(statusId);
    this.offerService.setOfferStatus(offerS).subscribe(value => {
      this.ngOnInit();
    });
  }
}
